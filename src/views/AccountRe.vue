<template lang="pug">
b-container#accountre
  p.text 家電家具回收預約
  b-table#accountre-table1.text-center(
    striped
    hover
    :items="pageBox1"
    :fields="fields"
  )
    template(#cell(items)="data")
      span(v-for="(item, index) in data.item.items") {{ item }}
        span(v-if="index < (data.item.items.length - 1)") 、
    template(#cell(freetime)="data")
      | {{ data.item.freetime.day }} ; {{ data.item.freetime.time }}
    template(#cell(done)="data")
      font-awesome-icon(:icon='["fas", "check"]' v-if='data.item.done')
      font-awesome-icon(:icon='["fas", "times"]' v-else)
  .overflow-auto.d-flex.justify-content-center
    b-pagination.mb-5(
      v-model="currentPage1"
      :total-rows="totalRows1"
      :per-page="perPage"
      first-number
      last-number
    )
  p.text 廢車回收預約
  b-table#accountre-table2.text-center(
    striped
    hover
    :items="pageBox2"
    :fields="fields"
  )
    template(#cell(items)="data")
      span(v-for="(item, index) in data.item.items") {{ item }}
        span(v-if="index < (data.item.items.length - 1)") 、
    template(#cell(freetime)="data")
      | {{ data.item.freetime.day }} ; {{ data.item.freetime.time }}
    template(#cell(done)="data")
      font-awesome-icon(:icon='["fas", "check"]' v-if='data.item.done')
      font-awesome-icon(:icon='["fas", "times"]' v-else)
  .overflow-auto.d-flex.justify-content-center
    b-pagination.mb-5(
      v-model="currentPage2"
      :total-rows="totalRows2"
      :per-page="perPage"
      first-number
      last-number
    )
</template>

<script>
export default {
  name: 'AccountRe',
  data () {
    return {
      furnitures: [],
      cars: [],
      currentPage1: 1,
      currentPage2: 1,
      perPage: 1,
      fields: [
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
          key: 'done',
          label: '完成',
          sortable: true
        }
      ]
    }
  },
  computed: {
    pageBox1 () {
      const items = this.furnitures
      return items.slice(
        (this.currentPage1 - 1) * this.perPage,
        this.currentPage1 * this.perPage
      )
    },
    totalRows1 () {
      return this.furnitures.length
    },
    pageBox2 () {
      const items = this.cars
      return items.slice(
        (this.currentPage2 - 1) * this.perPage,
        this.currentPage2 * this.perPage
      )
    },
    totalRows2 () {
      return this.cars.length
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/furnitures', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      const response = await this.axios.get('/cars', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.furnitures = data.result.map(furniture => {
        furniture.date = new Date(furniture.date).toLocaleString()
        return furniture
      })
      this.cars = response.data.result.map(car => {
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
