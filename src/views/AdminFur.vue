<template lang="pug">
b-container#adminfur
  p.adminTitle 家電家具回收預約
  b-row
    b-col.mb-4(cols="12")
      b-nav(pills justified)
        b-nav-item(to='/admin/fur/undone' exact exact-active-class="active") 未完成
        b-nav-item(to='/admin/fur/done' exact exact-active-class="active") 已完成
    b-col(cols="12")
      router-view
</template>
