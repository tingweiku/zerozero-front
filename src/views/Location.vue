<template lang="pug">
b-container#location
  p.title#title-1 回收據點
  #map
    l-map(
      ref="myMap"
      :zoom="zoom"
      :center="center"
      :options="options"
      style="height: 500px;"
    )
      l-tile-layer(:url="url")
      l-marker(ref="location" :lat-lng="center")
        l-popup(style="font-size: 1rem;") 你的位置
      l-marker(:lat-lng="[item.local.lat, item.local.lng]" v-for="(item, index) in data" :key="item.index")
        l-icon(
          :icon-url="icon.type.green"
          :shadow-url="icon.shadowUrl"
          :icon-size="icon.iconSize"
          :icon-anchor="icon.iconAnchor"
          :popup-anchor="icon.popupAnchor"
          :shadow-size="icon.shadowSize"
        )
        l-popup(style="font-size: 1rem;")
          span#map-name {{ item.name }}
          br
          span#map-address {{ item.address }}
  #divider
  p.title#title-2 回收項目
  b-row.box
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location1.png")')
        .item-text
          span 紙類
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location2.png")')
        .item-text
          span 寶特瓶、容器
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location3.png")')
        .item-text
          span 金屬
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location4.png")')
        .item-text
          span 舊衣
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location5.png")')
        .item-text
          span 塑膠
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location6.png")')
        .item-text
          span 家電
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location7.png")')
        .item-text
          span 3 C
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location8.png")')
        .item-text
          span 玻璃
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location9.png")')
        .item-text
          span 手機
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location10.png")')
        .item-text
          span 光碟
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location11.png")')
        .item-text
          span 電池
    b-col.d-flex.justify-content-center(cols="6" md="3" lg="2")
      .item
        .item-img
          img(:src='require("../assets/location12.png")')
        .item-text
          span 其他可回收物
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Location',
  data () {
    return {
      data: [],
      zoom: 13,
      center: [25.0441293, 121.4173269],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      options: {
        zoomControl: true
      },
      icon: {
        type: {
          green:
            'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png'
        },
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }
    }
  },
  async mounted () {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#location',
        start: 'top 30%',
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
      .from('#title-1', {
        y: -50,
        opacity: 0
      })
      .from('#map', {
        opacity: 0
      })
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.box',
        start: '-400 30%',
        end: 'bottom bottom',
        // markers: true,
        toggleActions: 'play none none none'
      },
      defaults: {
        duration: 0.5,
        ease: 'power1'
      }
    })
    tl2
      .from('#title-2', {
        y: -50,
        opacity: 0
      })
      .from('.item', {
        opacity: 0
      })
    // 等地圖創建後執行
    this.$nextTick(() => {
      // 獲得目前位置
      navigator.geolocation.getCurrentPosition(position => {
        const p = position.coords
        // 將中心點設為目前的位置
        this.center = [p.latitude, p.longitude]
        // 將目前的位置的標記點彈跳視窗打開
        this.$refs.location.mapObject.openPopup()
      })
    })
    try {
      const { data } = await this.axios.get('/locations', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.data = data.result
      return this.data
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得資料失敗'
      })
    }
  }
}
</script>
