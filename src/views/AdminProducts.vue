<template lang="pug">
b-container#adminproducts
  p.adminTitle 商品管理
  #btn-addproducts.mb-3.d-flex.justify-content-end
    b-btn(block @click="$bvModal.show('modal-addproduct')") 新增商品
  b-table#adminproducts-table.text-center(
    striped
    hover
    :items="pageBox"
    :fields="fields"
    ref="productTable"
  )
    template(#cell(image)="data")
      img(v-if="data.item" :src="data.item.image")
    template(#cell(sell)="data")
      font-awesome-icon(:icon='["fas", "check"]' v-if='data.item.sell')
      font-awesome-icon(:icon='["fas", "times"]' v-else)
    template(#cell(action)="data")
      b-btn.btn-edit(@click="editProduct(data.index)") 編輯
  .overflow-auto.d-flex.justify-content-center
    b-pagination.mb-5(
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      first-number
      last-number
    )
  b-modal#modal-addproduct(
    :title="form._id.length > 0 ? '編輯商品' : '新增商品'"
    centered
    ok-variant="success"
    ok-title="送出"
    cancel-title="取消"
    @ok="submitModal"
    @hidden="resetForm"
    :ok-disabled="submitDisable"
    :cancel-disabled="submitDisable"
  )
    b-form-group(
      label="品名"
      label-for="input-name"
      :state="state.name"
      description="品名長度限制為 1 個字以上"
      invalid-feedback="品名格式不正確"
    )
      b-form-input#input-name(
        v-model="form.name"
        type="text"
        required
        placeholder="請輸入品名"
        :state="state.name"
      )
    b-form-group(
      label="價格"
      label-for="input-price"
      :state="state.price"
      description="價格限制為 1 元以上"
      invalid-feedback="價格格式不正確"
    )
      b-form-input#input-price(
        v-model.number="form.price"
        type="number"
        required
        placeholder="請輸入價格"
        :state="state.price"
      )
    b-form-group(
      label="說明"
      label-for="input-description"
    )
      b-form-textarea#input-description(
        v-model="form.description"
        type="text"
        placeholder="請輸入說明文字"
      )
    b-form-group(
      label="上架"
      label-for="input-sell"
    )
      b-form-radio(v-model="form.sell" :value="true") 上架
      b-form-radio(v-model="form.sell" :value="false") 下架
    img-inputer(v-model="form.image" theme="dark" size="large" placeholder="點擊或拖曳選擇圖片" bottom-text="點擊或拖曳以修改")
</template>

<script>
export default {
  name: 'AdminProducts',
  data () {
    return {
      products: [],
      currentPage: 1,
      perPage: 5,
      fields: [
        {
          key: 'image',
          label: '圖片'
        },
        {
          key: 'name',
          label: '品名'
        },
        {
          key: 'price',
          label: '價格',
          sortable: true
        },
        {
          key: 'description',
          label: '說明'
        },
        {
          key: 'sell',
          label: '上架',
          sortable: true
        },
        {
          key: 'action',
          label: '操作'
        }
      ],
      submitDisable: false,
      form: {
        name: '',
        price: 0,
        description: '',
        sell: false,
        image: null,
        _id: ''
      }
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        price: this.form.price === 0 ? null : this.form.price > 0
      }
    },
    pageBox () {
      const items = this.products
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    totalRows () {
      return this.products.length
    }
  },
  methods: {
    editProduct (index) {
      this.form = {
        name: this.pageBox[index].name,
        price: this.pageBox[index].price,
        description: this.pageBox[index].description,
        sell: this.pageBox[index].sell,
        image: this.pageBox[index].image,
        _id: this.pageBox[index]._id,
        index
      }
      this.$bvModal.show('modal-addproduct')
    },
    resetForm (event) {
      if (this.submitDisable) {
        event.preventDefault()
        return
      }
      this.form = {
        name: '',
        price: 0,
        description: '',
        sell: false,
        image: null,
        _id: ''
      }
    },
    async submitModal () {
      this.submitDisable = true
      try {
        const fd = new FormData()
        for (const key in this.form) {
          fd.append(key, this.form[key])
        }
        if (this.form._id.length === 0) {
          const { data } = await this.axios.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.products.push({
            name: this.form.name,
            price: this.form.price,
            description: this.form.description,
            sell: this.form.sell,
            image: `${process.env.VUE_APP_API}/files/${data.result.image}`,
            _id: data.result._id
          })
        } else {
          const { data } = await this.axios.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.pageBox[this.form.index] = {
            name: this.form.name,
            price: this.form.price,
            description: this.form.description,
            sell: this.form.sell,
            image: `${process.env.VUE_APP_API}/files/${data.result.image}`,
            _id: this.form._id
          }
        }
        this.$refs.productTable.refresh()
        this.$bvModal.hide('modal-addproduct')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
      this.submitDisable = false
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.products = data.result.map(product => {
        if (product.image) {
          product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        }
        return product
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
