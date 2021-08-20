<template lang="pug">
b-container#admincar
  p.adminTitle 廢車回收預約
  b-row
    b-col.mb-4(cols="12")
      b-nav(pills justified)
        b-nav-item(to='/admin/car/undone' exact exact-active-class="active") 未完成
        b-nav-item(to='/admin/car/done' exact exact-active-class="active") 已完成
    b-col(cols="12")
      router-view
</template>
