<template lang="pug">
b-container#accountorder
  b-table#accountorder-table.text-center(
    striped
    hover
    :items="pageBox"
    :fields="fields"
  )
    template(#cell(name)="data")
      | {{ data.item.products.name }}
    template(#cell(price)="data")
      | {{ data.item.products.price }}
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
  name: 'AccountOrder',
  data () {
    return {
      orders: [],
      currentPage: 1,
      perPage: 10,
      fields: [
        {
          key: '_id',
          label: '訂單編號'
        },
        {
          key: 'date',
          label: '日期',
          sortable: true
        },
        {
          key: 'name',
          label: '商品',
          sortable: true
        },
        {
          key: 'price',
          label: '價格',
          sortable: true
        }
      ]
    }
  },
  computed: {
    pageBox () {
      const items = this.orders
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    totalRows () {
      return this.orders.length
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/orders', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.orders = data.result.map(order => {
        order.date = new Date(order.date).toLocaleString()
        return order
      })
    } catch (error) {
      console.log(error)
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
