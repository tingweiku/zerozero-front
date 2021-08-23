<template lang="pug">
b-container#furniture
  p.title#title-1 服務流程
  b-row#box.d-flex.flex-column.flex-md-row
    b-col
      .step
        .step-img
          img(:src='require("../assets/f1.png")')
        .step-text
          p Steps 1
          span 填寫需求
        font-awesome-icon.icon(:icon='["fas", "arrow-right"]')
        font-awesome-icon.icon-2(:icon='["fas", "arrow-right"]')
    b-col
      .step
        .step-img
          img(:src='require("../assets/f2.png")')
        .step-text
          p Steps 2
          span 客服來電
          br
          span 確認預約資訊
        font-awesome-icon.icon(:icon='["fas", "arrow-right"]')
        font-awesome-icon.icon-2(:icon='["fas", "arrow-right"]')
    b-col
      .step
        .step-img
          img(:src='require("../assets/f3.png")')
        .step-text
          p Steps 3
          span 預約成功
        font-awesome-icon.icon(:icon='["fas", "arrow-right"]')
        font-awesome-icon.icon-2(:icon='["fas", "arrow-right"]')
    b-col
      .step
        .step-img
          img(:src='require("../assets/f4.png")')
        .step-text
          p Steps 4
          span 司機前往
          br
          span 回收清運
        font-awesome-icon.icon(:icon='["fas", "arrow-right"]')
        font-awesome-icon.icon-2(:icon='["fas", "arrow-right"]')
    b-col
      .step
        .step-img
          img(:src='require("../assets/f5.png")')
        .step-text
          p Steps 5
          span 服務完成
          br
          span 點數回饋
  #divider
  p.title#title-2 服務費用
  #box-2
    #subtitle.d-flex.justify-content-start
      img(:src='require("../assets/ftable1.png")')
      span 家具清運
    p 單人沙發、L 型沙發、三人沙發、單人彈簧床墊、雙人彈簧床墊、乳膠床墊、獨立筒床墊、床架、木椅、木桌、櫃子、鐵架、按摩椅、運動器材、電動機車等皆可到府搬運處理
    b-table-simple#table
      b-thead
        b-tr
          b-th(colspan="2") 服務項目
          b-th 運費 + 搬運費 + 處理費用
          b-th(style="width: 250px;") 備註
      b-tbody
        b-tr
          b-td(rowspan="4") 沙發
          b-td 單人沙發
          b-td(rowspan="3") 收費 $800 ~ $3,000
          b-td(rowspan="11" style="text-align: left;")
            | 1. 家具品項
            span.hightlight 每筆訂單回饋 100Z
            br
            br
            | 2. 家具清運服務需先請您加 LINE 提供照片才能估價
            br
            br
            | 3. 實際報價會因地區、拆解 / 搬運難易度、品項狀況有所不同，歡迎來電洽詢！
        b-tr
          b-td 雙人沙發
        b-tr
          b-td 三人沙發
        b-tr
          b-td L 型沙發
          b-td 收費 $2,500 ~ $5,000
        b-tr
          b-td(rowspan="2") 床組
          b-td 床墊
          b-td(rowspan="2") 收費 $800 ~ $1,500
        b-tr
          b-td 床架
        b-tr
          b-td(colspan="2") 按摩椅
          b-td 收費 $2,000 ~ $3,000
        b-tr
          b-td(rowspan="2") 健身器材
          b-td 跑步機
          b-td(rowspan="2") 收費 $1,000 ~ $2,500
        b-tr
          b-td 運動器材
        b-tr
          b-td(rowspan="2") 其他
          b-td 桌子 / 椅子
          b-td(rowspan="2") 依功能外觀材質評估收取費用
        b-tr
          b-td 櫃子 / 鋼琴
  #box-3
    #subtitle.d-flex.justify-content-start
      img(:src='require("../assets/ftable2.png")')
      span 家電清運
    p 電視、冰箱、洗衣機、冷氣機、電腦主機、印表機、熱水器、小家電等皆可回收
    b-table-simple#table
      b-thead
        b-tr
          b-th 服務項目
          b-th 處理費用
          b-th(style="width: 250px") 備註
      b-tbody
        b-tr
          b-td 電視
            br
            span.hightlight （每台回饋 200Z 幣）
          b-td 免費貨運回收
          b-td(style="text-align: left;")
            | 1. 需自行搬運、包裝，限重 25 公斤內以合作物流可收貨標準為主。
            br
            br
            | 2. 若需到府搬運回收酌收出車費用 350 元起。
        b-tr
          b-td 冷氣
            br
            span.hightlight （每台回饋 500Z 幣）
          b-td(rowspan="3") 指定區域（請參考下表），有電梯者免費到府回收
          b-td(rowspan="3" style="text-align: left;") 不包含營業用冷氣、營業用冰箱、冰櫃及 7 公斤以下洗衣機。
        b-tr
          b-td 冰箱
            br
            span.hightlight （每台回饋 300Z 幣）
        b-tr
          b-td 洗衣機
            br
            span.hightlight （每台回饋 300Z 幣）
        b-tr
          b-td(colspan="3" style="color: #e07a5f;") 無電梯上樓搬運費用一層樓加$100，冷氣拆卸、移機工程費用另計。
    b-table-simple#table
      b-thead
        b-tr
          b-th(colspan="2") 免費到府回收冷氣/冰箱/洗衣機區域如下（東部及離島地區暫無提供服務）
      b-tbody
        b-tr
          b-td 台北
          b-td(style="width: 800px;text-align: left;") 大安區、士林區、內湖區、文山區、北投區、中山區、信義區、松山區、萬華區、中正區、大同區、南港區
        b-tr
          b-td 新北
          b-td(style="text-align: left;") 板橋區、新莊區、新店區、蘆洲區、五股區、汐止區、三峽區、林口區、八里區、中和區、三重區、樹林區、鶯歌區、泰山區、深坑區、永和區、土城區（部分山區路段需額外收費）
        b-tr
          b-td 基隆
          b-td(style="text-align: left;") 基隆市、其他區域可依車趟安排提供，請洽客服
        b-tr
          b-td 桃園
          b-td(style="text-align: left;") 桃園區、中壢、蘆竹、龜山、內壢、八德
        b-tr
          b-td 新竹
          b-td(style="text-align: left;") 新竹市東區、北區（舊港里、南寮里、海濱里、中寮里、港北里、康樂里、古賢里、機場里、需另加 300）、香山區（南隘里、大湖、茄苳里、東香里、牛埔里、為免費區域）、新豐、湖口、竹北、竹東、寶山
        b-tr
          b-td 苗栗
          b-td(style="text-align: left;") 頭份、竹南、造橋、頭屋、公館、銅鑼、三義、通霄、苑裡、苗栗市、西湖、後龍
        b-tr
          b-td 台中
          b-td(style="text-align: left;") 北屯、西屯、南屯、北區、南區、西區、、東區、中區、潭子區、大雅區、大里區、霧峰區、豐原區、神岡區
        b-tr
          b-td 彰化
          b-td(style="text-align: left;") 和美鎮、秀水鄉 、花壇鄉 、大村鄉、 員林鎮，其他區域可依車趟安排提供，請洽客服
        b-tr
          b-td 雲林
          b-td(style="text-align: left;") 依車趟安排提供，請洽客服
        b-tr
          b-td 南投
          b-td(style="text-align: left;") 依車趟安排提供，請洽客服
        b-tr
          b-td 台南
          b-td(style="text-align: left;") 永康、東區、南區、北區、中西區、安平、安南、仁德、歸仁、關廟、善化、安定、新市
        b-tr
          b-td 高雄
          b-td(style="text-align: left;") 前鎮、苓雅、新興、三民、前金、鹽埕、鼓山、左營 、湖內、茄萣、路竹、永安、彌陀、岡山、梓官、燕巢、橋頭、楠梓
  #box-4
    b-btn
      router-link(to="/reservefur") 立即預約
      font-awesome-icon.icon-3(:icon='["fas", "calendar-check"]')
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Furniture',
  mounted () {
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#box',
        start: '-200 30%',
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
      .from('#box', {
        opacity: 0
      })
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '#box-2',
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
      .from('#box-2', {
        opacity: 0
      })
      .from('#box-3', {
        opacity: 0
      })
      .from('#box-4', {
        opacity: 0
      })
  }
}
</script>
