<template lang="pug">
b-container#car
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
          span 客服來電確認
          br
          span 預約資訊與報價
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
          img(:src='require("../assets/c4.png")')
        .step-text
          p Steps 4
          span 司機前往
          br
          span 拖吊回收
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
  p.title#title-2 報廢價格
  #box-2
    #subtitle.d-flex.justify-content-start
      img(:src='require("../assets/ctable1.png")')
      span 汽車
    b-table-simple#table
      b-thead
        b-tr
          b-th(style="width:80px;")
          b-th 車體回收金
          b-th 政府獎勵金
          b-th 貨物稅舊換新補助
      b-tbody
        b-tr
          b-td 金額
          b-td $4,500 ~ $20,000
          b-td $1,000
          b-td $50,000
        b-tr
          b-td 條件
          b-td
            ul
              li 零件完整含電瓶
              li 含鋁圈、觸媒轉換器金額
          b-td 環保署官網E化申請
          b-td
            ul
             li 車輛出廠滿6年
             li 登記名下滿1年
             li 購買全新的汽車
        b-tr
          b-td 備註
          b-td 特殊車款，報價另計（營業用、大型貨車、高階車款）
          b-td 申請成功後收件日起算約3周工作天匯入車主戶頭
          b-td 聯單開立日前後半年內皆可申請。新舊車主須符合二等親內
  #box-3
    #subtitle.d-flex.justify-content-start
      img(:src='require("../assets/ctable2.png")')
      span 機車
    b-table-simple#table
      b-thead
        b-tr
          b-th(style="width:80px;")
          b-th 政府獎勵金
          b-th 二行程機車
          b-th 貨物稅舊換新補助
      b-tbody
        b-tr
          b-td 金額
          b-td $300
          b-td $500 ~ $3,500
          b-td $4,000
        b-tr
          b-td 條件
          b-td 環保署官網E化申請
          b-td 補助金額依照各地方環保局公布
          b-td
            ul
              li 車輛出廠滿4年
              li 登記名下滿1年
              li 購買全新的機車
        b-tr
          b-td 備註
          b-td 申請成功後收件日起算約3周工作天匯入車主戶頭
          b-td
          b-td 聯單開立日期前後半年內皆可申請。二等親內皆可辦理
  #divider
  p.title#title-3 準備文件
  #box-4
    #subtitle.d-flex.justify-content-start
      img(:src='require("../assets/ctable3.png")' style="height:50px; width: auto; transform: translateY(-20%)")
      span 準備文件
    b-table-simple#table
      b-thead
        b-tr
          b-th 辦理身分
          b-th 準備文件
          b-th 收車現場
          b-th 車牌報廢
      b-tbody
        b-tr
          b-td(rowspan="3") 車主本人辦理
          b-td 身分證影本
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
          b-td
        b-tr
          b-td 行照影本或報廢單影本
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
          b-td
        b-tr
          b-td 身分證、行照、車牌
          b-td
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
        b-tr
          b-td(rowspan="3") 代理人辦理
          b-td 車主身分證影本
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
          b-td
        b-tr
          b-td 行照影本或報廢單影本
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
          b-td
        b-tr
          b-td 身分證、行照、車牌
          b-td
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
        b-tr
          b-td(rowspan="5") 公司法人辦理
          b-td 代辦人身分證
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
        b-tr
          b-td 行照影本或報廢單影本
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
          b-td
        b-tr
          b-td 營登影本或核准設立函
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
        b-tr
          b-td 變更登記表、最新會計401表
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
        b-tr
          b-td 行照、車牌、公司大小章
          b-td
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
        b-tr
          b-td(rowspan="3") 車主往生親人辦理
          b-td 行照影本或報廢單影本
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
          b-td
        b-tr
          b-td 車主死亡證明影本或除戶證明影本
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
        b-tr
          b-td 行照、車牌、繼承人身分證及印章
          b-td
          b-td
            font-awesome-icon.icon(:icon='["fas", "check"]')
  #box-5
    b-btn
      router-link(to="/reservecar") 立即預約
      font-awesome-icon.icon-3(:icon='["fas", "calendar-check"]')
</template>

<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'Car',
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
    const tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '#box-4',
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
    tl3
      .from('#title-3', {
        y: -50,
        opacity: 0
      })
      .from('#box-4', {
        opacity: 0
      })
      .from('#box-5', {
        opacity: 0
      })
  }
}
</script>
