<template lang="pug">
b-container#accountre
  p.text 家電家具回收預約
  b-table#accountre-table1.text-center(
    striped
    hover
    :items="furnitures"
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
  p.text 廢車回收預約
  b-table#accountre-table2.text-center(
    striped
    hover
    :items="cars"
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
</template>

<script>
export default {
  name: 'AccountRe',
  data () {
    return {
      furnitures: [],
      cars: [],
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
