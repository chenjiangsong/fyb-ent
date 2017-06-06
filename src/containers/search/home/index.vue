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
      console.log('第一个请求')
      return API_MY.getMemberInfo()
    }).then((res) => {
      console.log('第一个请求后的请求')
    })
    API_MY.getMemberInfo().then((res) => {
      console.log('第二个请求')
    })
    API_MY.getMemberInfo().then((res) => {
      console.log('第三个请求')
    })
    API_MY.getMemberInfo().then((res) => {
      console.log('第四个请求')
    })
    API_MY.getMemberInfo().then((res) => {
      console.log('第五个请求')
    })
  }
}
</script>
