<template lang="pug">
b-container#exchange
  p.title#title-1 集點辦法
  b-row.d-flex.justify-content-center.flex-column.flex-lg-row
    b-col.box#box-1
      .exchange-img.text-center
        img(:src='require("../assets/exchange1.png")')
      .exchange-text.text-center
        span 加入 zero zero 會員
        br
        span 即可獲得
        span.text-points &ensp;100&ensp;
        span Z 幣
      .exchange-btn.text-center
        router-link(to='/register') 加入會員
    b-col.box#box-2
      .exchange-img.text-center
        img(:src='require("../assets/exchange2.png")')
      .exchange-text.text-center
        span 據點回收成功
        br
        span 即可獲得
        span.text-points &ensp;300&ensp;
        span Z 幣
      .exchange-btn.text-center
        router-link(to='/location') 查看回收據點
    b-col.box#box-3
      .exchange-img.text-center
        img(:src='require("../assets/exchange3.png")')
      .exchange-text.text-center
        span 預約回收服務完成
        br
        span 獲得高達
        span.text-points &ensp;1500&ensp;
        span Z 幣
      .exchange-btn.text-center
        router-link(to='/reservefur') 立即預約
  #divider
  p.title#title-2 商品兌換
  b-row#product
    b-col.box2(cols="12" md="6" lg="3" v-for="(product, index) in products" :key="product._id")
      router-link(:to="'/product/' + product._id")
        ProductCard(:product="product")
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Home',
  data () {
    return {
      products: []
    }
  },
  components: {
    ProductCard
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/products')
      this.products = data.result.map(product => {
        if (product.image) {
          product.image = `${process.env.VUE_APP_API}/files/${product.image}`
        }
        return product
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  }
}
</script>
