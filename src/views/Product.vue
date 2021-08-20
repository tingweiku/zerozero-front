<template lang="pug">
b-container#product
  b-overlay(:show="!sell")
    b-row
      b-col.d-flex.justify-content-center.justify-content-md-end(cols="12" md="6")
        #img
          img(:src="image")
      b-col#text.d-flex.flex-column.align-items-start(cols="12" md="6")
        p#title {{ name }}
        p {{ description }}
        #price
          img(:src='require("../assets/zcoin.png")')
          | {{ price }}
      b-col.d-flex.justify-content-center(cols="12")
        b-btn#exchange-btn(@click="exchange()") 立即兌換
    template(#overlay)
      h1 已下架
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      name: '',
      price: '',
      description: '',
      image: '',
      sell: true,
      users: []
    }
  },
  methods: {
    async exchange () {
      if (this.$store.state.jwt.token.length === 0) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '請先登入'
        })
        this.$router.push('/login')
        return
      }
      try {
        if (this.users.points < this.price) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '剩餘點數不足'
          })
          return
        }
        await this.axios.post('/orders', { products: this.$route.params.id }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        const remain = this.users.points - this.price
        await this.axios.patch('/users/exchange/' + this.users._id, { points: remain }, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$swal({
          icon: 'success',
          title: '成功',
          text: `兌換成功，剩餘 Z 幣 ${remain}`
        })
      } catch (error) {
        console.log(error)
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '兌換失敗'
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = `${process.env.VUE_APP_API}/files/${data.result.image}`
      this.sell = data.result.sell
      document.title = `${this.name} | 購物網`
      const response = await this.axios.get('/users', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.users = response.data.result
      return this.users
    } catch (error) {}
  }
}
</script>
