<template lang="pug">
b-container#adminlocation
  p.adminTitle 據點管理
  #btn-addlocation.mb-3.d-flex.justify-content-end
    b-btn(block @click="$bvModal.show('modal-location')") 新增地點
  b-table#adminlocation-table.text-center(
    striped
    hover
    :items="pageBox"
    :fields="fields"
    ref="locationTable"
  )
    template(#cell(lat)="data")
      | {{ data.item.local.lat }}
    template(#cell(lng)="data")
      | {{ data.item.local.lng }}
    template(#cell(action)="data")
      b-btn.btn-edit(@click="editLocation(data.index)") 編輯
      b-btn.btn-del(@click="dellocation(data)") 刪除
  .overflow-auto.d-flex.justify-content-center
    b-pagination.mb-5(
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      first-number
      last-number
    )
  b-modal#modal-location(
    :title="form._id.length > 0 ? '編輯據點' : '新增據點'"
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
      label="名稱"
      label-for="input-name"
      :state="state.name"
      description="名稱限制為 1 個字以上"
      invalid-feedback="名稱格式不正確"
    )
      b-form-input#input-name(
        v-model="form.name"
        type="text"
        required
        placeholder="請輸入名稱"
        :state="state.name"
      )
    b-form-group(
      label="地址"
      label-for="input-address"
      :state="state.address"
      description="地址限制為 1 個字以上"
      invalid-feedback="地址格式不正確"
    )
      b-form-input#input-address(
        v-model="form.address"
        type="text"
        required
        placeholder="請輸入地址"
        :state="state.address"
      )
    b-form-group(
      label="經度"
      label-for="input-local-lat"
    )
      b-form-input#input-local-lat(
        v-model="form.local.lat"
        type="number"
        required
        placeholder="請輸入經度"
      )
    b-form-group(
      label="緯度"
      label-for="input-local-lat"
    )
      b-form-input#input-local-lng(
        v-model="form.local.lng"
        type="number"
        required
        placeholder="請輸入緯度"
      )
</template>

<script>
export default {
  name: 'AdminLocation',
  data () {
    return {
      locations: [],
      currentPage: 1,
      perPage: 10,
      fields: [
        {
          key: 'name',
          label: '名稱'
        },
        {
          key: 'address',
          label: '地址'
        },
        {
          key: 'lat',
          label: '經度'
        },
        {
          key: 'lng',
          label: '緯度'
        },
        {
          key: 'action',
          label: '操作'
        }
      ],
      submitDisable: false,
      form: {
        name: '',
        address: '',
        local: {
          lat: 0,
          lng: 0
        },
        _id: ''
      }
    }
  },
  computed: {
    state () {
      return {
        name: this.form.name.length === 0 ? null : true,
        address: this.form.address.length === 0 ? null : true
      }
    },
    pageBox () {
      const items = this.locations
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    totalRows () {
      return this.locations.length
    }
  },
  methods: {
    resetForm (event) {
      if (this.submitDisable) {
        event.preventDefault()
        return
      }
      this.form = {
        name: '',
        address: '',
        local: {
          lat: 0,
          lng: 0
        },
        _id: ''
      }
    },
    editLocation (index) {
      this.form = {
        name: this.pageBox[index].name,
        address: this.pageBox[index].address,
        local: {
          lat: this.pageBox[index].local.lat,
          lng: this.pageBox[index].local.lng
        },
        _id: this.pageBox[index]._id,
        index
      }
      this.$bvModal.show('modal-location')
    },
    async dellocation (data) {
      try {
        await this.axios.delete('/locations/' + data.item._id, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        const index = this.locations.findIndex(location => location._id === data.item._id)
        this.locations.splice(index, 1)
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
        const formData = {
          name: this.form.name,
          address: this.form.address,
          local: {
            lat: this.form.local.lat,
            lng: this.form.local.lng
          }
        }
        if (this.form._id.length === 0) {
          const { data } = await this.axios.post('/locations', formData, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.locations.push({
            name: formData.name,
            address: formData.address,
            local: {
              lat: formData.local.lat,
              lng: formData.local.lng
            },
            _id: data.result._id
          })
        } else {
          await this.axios.patch('/locations/' + this.form._id, formData, {
            headers: {
              authorization: 'Bearer ' + this.$store.state.jwt.token
            }
          })
          this.pageBox[this.form.index] = {
            name: this.form.name,
            address: this.form.address,
            local: {
              lat: this.form.local.lat,
              lng: this.form.local.lng
            },
            _id: this.form._id
          }
        }
        this.$refs.locationTable.refresh()
        this.$bvModal.hide('modal-location')
        this.submitDisable = false
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/locations', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.locations = data.result
      return this.locations
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得資料失敗'
      })
    }
  }
}
</script>
