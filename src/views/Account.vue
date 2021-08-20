<template lang="pug">
b-container#account
  p.title#title-1 會員專區
  b-row
    b-col.d-flex.justify-content-center(cols="12")
      #box
        span.d-block 帳號：{{ users.account }}
        span.d-block 信箱：{{ users.email }}
        span Z 幣：
        span#points {{ users.points }}
  b-row.d-flex.justify-content-center
    b-col.mb-5(cols="6")
      b-nav(pills justified)
        b-nav-item(to='/account/order' exact exact-active-class="active") 我的兌換
        b-nav-item(to='/account/re' exact exact-active-class="active") 我的預約
    b-col(cols="12")
      router-view
</template>

<script>
export default {
  name: 'Account',
  data () {
    return {
      users: []
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/users', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.users = data.result
      return this.users
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '請先登入會員'
      })
      this.$router.push('/login')
    }
  }
}
</script>
