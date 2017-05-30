<template>
  <div class="search-index-wrap">
    <tabbar></tabbar>
  </div>
</template>
<script>
import { Tabbar } from '@/components'
import { my as API_MY } from 'api'
export default {
  components: {
    Tabbar
  },
  mounted () {
    API_MY.getUserInfo().then((res) => {
      console.log(res)
    })
    API_MY.getMemberInfo().then((res) => {
      console.log(res)
    })
    API_MY.getMemberInfo().then((res) => {
      console.log(res)
    })
    API_MY.getMemberInfo().then((res) => {
      console.log(res)
    })
    API_MY.getMemberInfo().then((res) => {
      console.log(res)
    })
  }
}
</script>
