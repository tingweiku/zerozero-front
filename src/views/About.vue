<template lang="pug">
b-container#about
  p.title 關於我們
  .box-1
    span 妳好，你好，地球共好。
    span 隨著世界各地的資源日漸耗竭，我們正面臨來自環境的嚴峻挑戰，
    span 「回收再利用」已成為全球最重要的共同課題。
  .box-2
    span zero zero 團隊以「好回收、好生活」為信念，更以「零廢棄、全循環」為職志，我們致力推動便利、友善、效率、多元的回收與環保服務。期許能以創新思維，解決環境的難題。用簡單、愉悅的方式實踐回收、推行環保。
  #divider
  .box-3#box-3-1
    p#title 什麼是 zero zero
    p zero zero 共有兩個 0，一個 0 代表「零廢棄」，另一個 0 代表「全循環」，結合在一起即是無限符號「∞」的縮寫，表現我們想為台灣打造資源物料回收再利用，達到「循環經濟」的決心。
    p 品牌色澤鮮亮，揉合自然的藍綠與草綠，並融入笑臉般的意象，體現出品牌的「友善」性格。並為了表達團隊親切的服務態度，以及英文諧音在地化的體貼，以「妳好你好」一詞作為品牌中譯，期待與我們接觸的每個人，都可以一同與地球共好。
  #divider
  .box-3#box-3-2
    p#title zero zero 的理念目標
    p#subtitle 零廢棄、全循環
    p 目前的日常生活用品，多半採「線性生產」造物模式，依循「原料→生產→銷售→使用→廢棄」步驟，一經製造就面臨廢棄的命運，這種模式再不調整，資源耗盡、垃圾汙染等問題將愈來愈棘手。zero zero 提倡「全循環」的造物模式，讓造物直線兩端接合，廢棄物將再度成為原料，同時減少垃圾與資源耗竭的環保問題。
    p 提到「環保」，您是否感到任重而道遠，知易而行難呢？
    p 我們都明白地球的環境持續劣化，生存環境正面臨威脅，改變不能等明天，如果您也認同「零廢棄、全循環」的理念，可以從最簡單的「回收」行動做起，zero zero 提供多種回收管道、環保知識及文章刊物，誠摯邀請您與我們一同為地球盡一份綠吧！
  #divider
  .box-4
    p#title 專業且全方位的服務
    b-row
      b-col(cols="12" md="6" lg="3")
        .service#service1
          .service-img.text-center
            img(:src='require("../assets/about1.png")')
          .service-text
            span.service-title.d-block.mb-3 社區資源回收
            span.d-block 定期清運、儲區規畫、提高社區滿意度的最佳回收方案。
      b-col(cols="12" md="6" lg="3")
        .service#service2
          #about2-img.service-img.text-center
            img(:src='require("../assets/about2.png")')
          .service-text
            span.service-title.d-block.mb-3 家電回收
            span.d-block 提供付費到府搬運電視、冰箱、洗衣機、冷氣機、電腦主機等大型家電的回收服務。
      b-col(cols="12" md="6" lg="3")
        .service#service3
          .service-img.text-center
            img(:src='require("../assets/about3.png")')
          .service-text
            span.service-title.d-block.mb-3 廢車回收
            span.d-block 極具競爭力的合作利潤模式。
      b-col(cols="12" md="6" lg="3")
        .service#service4
          .service-img.text-center
            img(:src='require("../assets/about4.png")')
          .service-text
            span.service-title.d-block.mb-3 城市環保店
            span.d-block 全台最新穎的小型資源回收站，是附近居民、商家回收的好夥伴。
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'About',
  mounted () {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#about',
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
      .from('.title', {
        y: -50,
        opacity: 0
      })
      .from('.box-1', {
        x: -50,
        opacity: 0
      })
      .from('.box-2', {
        x: -50,
        opacity: 0
      })
      .from('#box-3-1', {
        x: -50,
        opacity: 0
      })
      .from('#box-3-2', {
        x: -50,
        opacity: 0
      })
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.box-4',
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
      .from('.box-4 #title', {
        x: -50,
        opacity: 0
      })
      .from('#service1', {
        opacity: 0
      })
      .from('#service2', {
        opacity: 0
      })
      .from('#service3', {
        opacity: 0
      })
      .from('#service4', {
        opacity: 0
      })
  }
}
</script>
