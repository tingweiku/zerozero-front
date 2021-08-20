<template lang="pug">
b-container#accountorder
  b-table#accountorder-table.text-center(
    striped
    hover
    :items="orders"
    :fields="fields"
  )
    template(#cell(name)="data")
      | {{ data.item.products.name }}
    template(#cell(price)="data")
      | {{ data.item.products.price }}
</template>

<script>
export default {
  name: 'AccountOrder',
  data () {
    return {
      orders: [],
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
