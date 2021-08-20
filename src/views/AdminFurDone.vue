<template lang="pug">
#adminfurdone
  b-table#adminfurdone-table.text-center(
    striped
    hover
    :items="pageBox"
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
  .overflow-auto.d-flex.justify-content-center
    b-pagination.mb-5(
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      first-number
      last-number
    )
</template>

<script>
export default {
  name: 'AdminFurdone',
  data () {
    return {
      furnitures: [],
      currentPage: 1,
      perPage: 10,
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
        }
      ]
    }
  },
  computed: {
    pageBox () {
      const items = this.furnitures
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    totalRows () {
      return this.furnitures.length
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/furnitures/alldone', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.furnitures = data.result.map(furniture => {
        furniture.date = new Date(furniture.date).toLocaleString()
        return furniture
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
