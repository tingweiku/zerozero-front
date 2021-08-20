<template lang="pug">
b-container#reservefur
  p.title#title-1 家電家具回收預約
  b-row
    b-col
      b-form.w-100.d-flex.align-items-center.flex-column(@submit.prevent="submit" @reset="reset")
        #box
          #subtitle
            img(:src='require("../assets/reserve1.png")')
            span 所在地址
          b-row
            b-col(cols="12")
              b-form-group(
                label-for="input-address"
              )
                b-form-input#input-address(
                  v-model="form.address"
                  type="text"
                  required
                  placeholder="請輸入地址"
                )
              p#text 服務地區：基隆、台北、新北、桃園、新竹、苗栗、台中、彰化、南投、雲林、嘉義、台南、高雄。
        #box
          #subtitle
            img(:src='require("../assets/reserve2.png")')
            span 品項
          b-row
            b-col(cols="12")
              p#text2 請選擇回收品項
              b-form-group(
                label-for="input-items"
              )
                b-form-checkbox(
                  v-for="option in options"
                  v-model="form.items"
                  :key="option.value"
                  :value="option.value"
                )
                  | {{option.text}}
        #box
          #subtitle
            img(:src='require("../assets/reserve3.png")')
            span 希望服務時間
          b-row
            b-col(cols="6")
              b-form-group(
                label-for="input-day"
              )
                b-form-select#input-day(
                  v-model="form.freetime.day"
                  :options="options2"
                  value-field="value"
                  text-field="text"
                )
            b-col(cols="6")
              b-form-group(
                label-for="input-time"
              )
                b-form-select#input-time(
                  v-model="form.freetime.time"
                  :options="options3"
                  value-field="value"
                  text-field="text"
                )
          p#text 客服人員會依照您希望的預約時間做安排，實際服務時間以客服與您聯繫後所預約的時間為主。
        #box
          #subtitle
            img(:src='require("../assets/reserve4.png")')
            span 聯絡電話
          b-row
            b-col(cols="12")
              b-form-group(
                label-for="input-tel"
                :state="state.tel"
                description="請輸入有效的手機號碼"
              )
                b-form-input#input-tel(
                  v-model="form.tel"
                  type="text"
                  required
                  placeholder="請輸入聯絡電話"
                  :state="state.tel"
                )
        #box-2
          b-btn#btn-submit.mr-3(type="submit") 送出
          b-btn#btn-reset(type="reset") 重設
</template>

<script>
import isMobilePhone from 'validator/es/lib/isMobilePhone'

export default {
  name: 'ReserveFur',
  data () {
    return {
      form: {
        user: [],
        address: '',
        items: [],
        freetime: {
          day: null,
          time: null
        },
        tel: '',
        done: false
      },
      options: [
        { text: '電視', value: '電視' },
        { text: '冰箱', value: '冰箱' },
        { text: '洗衣機', value: '洗衣機' },
        { text: '電腦主機', value: '電腦主機' },
        { text: '冷氣機', value: '冷氣機' },
        { text: '其他', value: '其他' }
      ],
      options2: [
        { text: '請選擇日期', value: null },
        { text: '平日', value: '平日' },
        { text: '假日', value: '假日' },
        { text: '平日及假日', value: '平日及假日' }
      ],
      options3: [
        { text: '請選擇時間', value: null },
        { text: '上午', value: '上午' },
        { text: '下午', value: '下午' },
        { text: '上午及下午', value: '上午及下午' }
      ]
    }
  },
  computed: {
    state () {
      const tel = this.form.tel
      return {
        tel: tel.length === 0 ? null : isMobilePhone(tel, 'zh-TW')
      }
    }
  },
  methods: {
    reset () {
      this.form.address = ''
      this.form.items = []
      this.form.freetime.day = null
      this.form.freetime.time = null
      this.form.tel = ''
    },
    async submit () {
      try {
        await this.axios.post('/furnitures', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '預約成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/users', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.form.user = data.result
      return this.form.user
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
