<template lang="pug">
b-container#adminfront
  p.adminTitle 首頁輪播圖管理
  #btn-addimg.mb-3.d-flex.justify-content-end
    b-btn(block @click="$bvModal.show('modal-carousel')") 新增圖片
  b-table#admincarousel-table.text-center(
    striped
    hover
    :items="carousels"
    :fields="fields"
    ref="carouselTable"
  )
    template(#cell(image)="data")
      img(v-if="data.item" :src="data.item.image")
    template(#cell(show)="data")
      font-awesome-icon(:icon='["fas", "check"]' v-if='data.item.show')
      font-awesome-icon(:icon='["fas", "times"]' v-else)
    template(#cell(action)="data")
      b-btn.btn-edit.mr-2(@click="editCarousel(data.index)") 編輯
      b-btn.btn-del(@click="delCarousel(data)") 刪除
  #box
  b-modal#modal-carousel(
    title="新增輪播圖"
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
      label="上傳圖片"
    )
      img-inputer(v-model="form.image" theme="dark" size="large" placeholder="點擊或拖曳選擇圖片" bottom-text="點擊或拖曳以修改")
    b-form-group(
      label="前台顯示"
    )
      b-form-radio(v-model="form.show" :value="true") 顯示
      b-form-radio(v-model="form.show" :value="false") 不顯示
  b-modal#modal-carousel-edit(
    title="編輯"
    centered
    ok-variant="success"
    ok-title="送出"
    cancel-title="取消"
    @ok="submitEditModal"
    @hidden="resetForm"
  )
    b-form-group(
      label="前台顯示"
    )
      b-form-radio(v-model="form.show" :value="true") 顯示
      b-form-radio(v-model="form.show" :value="false") 不顯示
</template>

<script>
export default {
  name: 'AdminFront',
  data () {
    return {
      carousels: [],
      fields: [
        {
          key: 'image',
          label: '圖片'
        },
        {
          key: 'show',
          label: '顯示'
        },
        {
          key: 'action',
          label: '操作'
        }
      ],
      submitDisable: false,
      form: {
        image: null,
        show: false,
        id: ''
      }
    }
  },
  methods: {
    resetForm (event) {
      if (this.submitDisable) {
        event.preventDefault()
        return
      }
      this.form = {
        image: null,
        show: false,
        _id: ''
      }
    },
    editCarousel (index) {
      this.form = {
        image: this.carousels[index].image,
        show: this.carousels[index].show,
        _id: this.carousels[index]._id,
        index
      }
      this.$bvModal.show('modal-carousel-edit')
    },
    async delCarousel (data) {
      try {
        await this.axios.delete('/carousels/' + data.item._id, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        const index = this.carousels.findIndex(carousel => carousel._id === data.item._id)
        this.carousels.splice(index, 1)
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    },
    async submitModal () {
      this.submitDisable = true
      try {
        const fd = new FormData()
        for (const key in this.form) {
          fd.append(key, this.form[key])
        }
        const { data } = await this.axios.post('/carousels', fd, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.carousels.push({
          image: `${process.env.VUE_APP_API}/files/${data.result.image}`,
          show: this.form.show,
          _id: data.result._id
        })
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
      this.$refs.carouselTable.refresh()
      this.$bvModal.hide('modal-carousel')
      this.submitDisable = false
    },
    async submitEditModal () {
      this.submitDisable = true
      try {
        const { data } = await this.axios.patch('/carousels/' + this.form._id, { show: this.form.show }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.carousels[this.form.index] = {
          image: `${process.env.VUE_APP_API}/files/${data.result.image}`,
          show: this.form.show,
          _id: this.form._id
        }
        this.$refs.carouselTable.refresh()
        this.$bvModal.hide('modal-carousel')
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
      const { data } = await this.axios.get('/carousels/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.carousels = data.result.map(carousel => {
        if (carousel.image) {
          carousel.image = `${process.env.VUE_APP_API}/files/${carousel.image}`
        }
        return carousel
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得圖片失敗'
      })
    }
  }
}
</script>
