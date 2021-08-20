<template lang="pug">
#app
  b-navbar#navbar(toggleable='lg' type='dark' v-if="!$route.path.includes('admin')")
    b-container
      b-navbar-brand(to='/' title='回首頁')
        img#logo1(:src='require("./assets/logo1.png")')
      b-navbar-toggle(target='nav-collapse')
      b-collapse#nav-collapse(is-nav)
        b-navbar-nav
          b-nav-item.ml-auto(to='/about') 關於我們
          b-nav-item.ml-auto(to='/location') 回收據點
          b-nav-item.ml-auto(to='/furniture') 家電家具回收
          b-nav-item.ml-auto(to='/car') 廢車回收
          b-nav-item.ml-auto(to='/exchange') 兌換中心
          b-nav-item.ml-auto(v-if="!user.islogin" to='/login') 登入
          b-nav-item.ml-auto(v-if="user.islogin && !user.isAdmin" to='/account/order') 會員專區
          b-nav-item.ml-auto(v-if="user.isAdmin" to='/admin') 後台管理
          b-nav-item.ml-auto(v-if="user.islogin" @click="logout") 登出
  #nav(v-if="!$route.path.includes('admin')")
    b-container
      #logo2.w-100
        router-link(to='/' title='回首頁')
          img(:src='require("./assets/logo2.png")')
      #menu.d-flex.justify-content-center.w-100
        router-link(to='/about') 關於我們
        router-link(to='/location') 回收據點
        router-link(to='/furniture') 家電家具回收
        router-link(to='/car') 廢車回收
        router-link(to='/exchange') 兌換中心
        router-link(v-if="!user.islogin" to='/login') 登入
        router-link(v-if="user.islogin && !user.isAdmin" to='/account/order') 會員專區
        router-link(v-if="user.isAdmin" to='/admin') 後台管理
        a(v-if="user.islogin" @click="logout") 登出
  #v-content(:style="{minHeight: Height + 'px'}")
    router-view
  Footer(v-if="!$route.path.includes('admin')")
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  data () {
    return {
      Height: 0
    }
  },
  components: {
    Footer
  },
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
  },
  async mounted () {
    // 動態設置內容高度，讓 footer 始終置底，nav + footer 高度 = 300
    this.Height = document.documentElement.clientHeight - 275
    // 監聽瀏覽器窗口變化
    window.onresize = () => { this.Height = document.documentElement.clientHeight - 275 }
    if (this.$store.state.jwt.token.length === 0) return
    const diff = Date.now() - this.$store.state.jwt.received
    try {
      // 如果進入網頁時，距離收到 jwt 過了六天，重新取得一次新的 jwt
      // 1000 * 60 * 60 * 24 * 6 = 6 天的毫秒數
      if (diff > 1000 * 60 * 60 * 24 * 6) {
        const { data } = await this.axios.post('/users/extend', {}, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.$store.commit('extend', data.result)
      }
      // 進入網頁時重新取一次使用者資料
      const { data } = await this.axios.get('/users/', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.$store.commit('getinfo', data.result)
    } catch (error) {
      this.$store.commit('logout')
    }
  }
}
</script>
