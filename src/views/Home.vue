<template lang="pug">
#home
  b-carousel#carousel(
    v-model="slide"
    :interval="5000"
    controls
    indicators
    background="#ababab"
    img-width="1024"
    img-height="400"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  )
    b-carousel-slide(
      v-for="(carousel, index) in carousels"
      :img-src="carousel.image"
      :key="carousel._id"
    )
  b-container
    p.title#title 服務項目
    b-row#box
      b-col.d-flex.justify-content-center.justify-content-md-end(cols="12" md="6")
        .service#service1
          img.service-img(:src='require("../assets/service1.jpg")')
          .service-mask
          .box-2
            .box-img
              img(:src='require("../assets/about1.png")')
            .box-text
              span.box-title.d-block 社區資源回收
              span.box-subtitle 定期清運環境整潔無異味
      b-col.d-flex.justify-content-center.justify-content-md-start(cols="12" md="6")
        .service#service2
          img.service-img(:src='require("../assets/service2.jpg")')
          .service-mask
          .box-2
            .box-img
              img(:src='require("../assets/about2.png")')
            .box-text
              span.box-title.d-block 家電家具服務
              span.box-subtitle 預約到府回收
      b-col.d-flex.justify-content-center.justify-content-md-end(cols="12" md="6")
        .service#service3
          img.service-img(:src='require("../assets/service3.jpg")')
          .service-mask
          .box-2
            .box-img
              img(:src='require("../assets/about3.png")')
            .box-text
              span.box-title.d-block 廢車回收
              span.box-subtitle 快速預約到府服務
      b-col.d-flex.justify-content-center.justify-content-md-start(cols="12" md="6")
        .service#service4
          img.service-img(:src='require("../assets/service4.jpg")')
          .service-mask
          .box-2
            .box-img
              img(:src='require("../assets/about4.png")')
            .box-text
              span.box-title.d-block 城市環保站
              span.box-subtitle 變廢為實 全程追蹤管理
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Home',
  data () {
    return {
      slide: 0,
      sliding: null,
      carousels: []
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/carousels/', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.carousels = data.result.map(carousel => {
        if (carousel.image) {
          carousel.image = `${process.env.VUE_APP_API}/files/${carousel.image}`
        }
        return carousel
      })
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得圖片失敗'
      })
    }
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#box',
        start: '-300 30%',
        end: 'bottom bottom',
        // markers: true,
        toggleActions: 'play none none none'
      },
      defaults: {
        duration: 0.5,
        ease: 'power1'
      }
    })
    tl1
      .from('.title', {
        y: -50,
        opacity: 0
      })
      .from('#service1', {
        opacity: 0
      })
      .from('#service2', {
        opacity: 0
      }, '+=0.05')
      .from('#service3', {
        opacity: 0
      }, '+=0.05')
      .from('#service4', {
        opacity: 0
      }, '+=0.05')
  }
}
</script>
