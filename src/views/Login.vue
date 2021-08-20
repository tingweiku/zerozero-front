<template lang="pug">
b-container#login
  p.title 會員登入
  #wrap
  #loginbox
    b-row.justify-content-center
      b-col(cols="9")
        b-form#form-login(@submit.prevent="submit")
          b-form-group(
            label="帳號"
            label-for="input-account"
            :state="state.account"
            invalid-feedback="帳號格式不正確"
          )
            b-form-input#input-account(
              v-model="form.account"
              type="text"
              required
              placeholder="請輸入帳號"
              :state="state.account"
            )
          b-form-group(
            label="密碼"
            label-for="input-password"
            :state="state.password"
            invalid-feedback="密碼格式不正確"
          )
            b-form-input#input-password(
              v-model="form.password"
              type="password"
              required
              placeholder="請輸入密碼"
              :state="state.password"
            )
          .text-center
            b-btn#btn-login.mt-5.d-block.w-100(type="submit") 登入
          #link
            router-link(to='/register') 會員註冊
            | |
            router-link(to='/') 忘記密碼
  #content
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: ''
      }
    }
  },
  computed: {
    state () {
      const account = this.form.account
      const password = this.form.password
      return {
        account: account.length === 0 ? null : account.length >= 4 && account.length <= 20,
        password: password.length === 0 ? null : password.length >= 4 && password.length <= 20
      }
    }
  },
  methods: {
    async submit () {
      try {
        const { data } = await this.axios.post('/users/login', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '登入成功'
        })
        this.$store.commit('login', data)
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message
        })
      }
    }
  }
}
</script>
