<template lang="pug">
#admin
  b-navbar#adminNavbar(toggleable='lg' type='dark' variant='dark')
    b-container
      b-navbar-brand(to='/admin' title='回首頁')
        img#logo(:src='require("../assets/logo1.png")')
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav.ml-auto
          b-nav-item.ml-auto(to='/admin/members') 會員管理
          b-nav-item.ml-auto(to='/admin/fur/undone') 家電家具回收
          b-nav-item.ml-auto(to='/admin/car/undone') 廢車回收
          b-nav-item.ml-auto(to='/admin/products') 商品管理
          b-nav-item.ml-auto(to='/admin/orders') 兌換管理
          b-nav-item.ml-auto(to='/admin/front') 首頁輪播圖
          b-nav-item.ml-auto(to='/admin/location') 據點管理
          b-nav-item.ml-auto(to='/') 回到前台
          b-nav-item.ml-auto(@click="logout") 登出
  router-view
</template>

<script>
export default {
  name: 'Admin',
  methods: {
    async logout () {
      try {
        await this.axios.delete('/users/logout', {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('logout')
        if (this.$route.path !== '/') this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: '發生錯誤'
        })
      }
    }
  }
}
</script>
