<template lang="pug">
#admincarundone
  b-table#admincarundone-table.text-center(
    striped
    hover
    :items="cars"
    :fields="fields"
    ref="reservesTable"
  )
    template(#cell(user)="data")
      | {{ data.item.user.account }}
    template(#cell(items)="data")
      span(v-for="(item, index) in data.item.items") {{ item }}
        span(v-if="index < (data.item.items.length - 1)") 、
    template(#cell(freetime)="data")
      | {{ data.item.freetime.day }} ; {{ data.item.freetime.time }}
    template(#cell(action)="data")
      b-btn.btn-edit(@click="editReserve(data.index)") 編輯
  b-modal#modal-done(
    title="編輯"
    centered
    ok-variant="success"
    ok-title="送出"
    cancel-title="取消"
    @ok="submitModal"
  )
    b-form-group(
      label="處理"
      label-for="input-role"
    )
      b-form-radio(v-model="form.done" :value="false") 未完成
      b-form-radio(v-model="form.done" :value="true") 已完成
</template>

<script>
export default {
  name: 'AdminCarUndone',
  data () {
    return {
      cars: [],
      fields: [
        {
          key: 'user',
          label: '帳戶',
          sortable: true
        },
        {
          key: 'address',
          label: '地址',
          sortable: true
        },
        {
          key: 'items',
          label: '品項'
        },
        {
          key: 'freetime',
          label: '希望服務時間'
        },
        {
          key: 'tel',
          label: '聯絡電話'
        },
        {
          key: 'date',
          label: '日期',
          sortable: true
        },
        {
          key: 'action',
          label: '操作'
        }
      ],
      form: {
        done: false,
        _id: ''
      }
    }
  },
  methods: {
    editReserve (index) {
      this.form = {
        done: this.cars[index].done,
        _id: this.cars[index]._id,
        index
      }
      this.$bvModal.show('modal-done')
    },
    async submitModal () {
      try {
        const data = {
          done: this.form.done
        }
        await this.axios.patch('/cars/' + this.form._id, data, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.cars[this.form.index] = {
          done: this.form.done,
          _id: this.form._id
        }
        const index = this.cars.findIndex(car => car._id === this.form._id)
        this.cars.splice(index, 1)
        this.$refs.reservesTable.refresh()
        this.$bvModal.hide('modal-done')
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
      const { data } = await this.axios.get('/cars/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.cars = data.result.map(car => {
        car.date = new Date(car.date).toLocaleString()
        return car
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得預約資料失敗'
      })
    }
  }
}
</script>
