<template>
  <div id="app">
    <router-view class="router-view"></router-view>
  </div>
</template>

<script>
import { Loading } from 'vux'

export default {
  name: 'app',
  components: {
    Loading
  },
  data () {
    return {
    }
  },
  created () {
    // console.log('created')
  },
  mounted () {
    // console.log('mounted')
  }
}
</script>

<style lang="less">
html, body{
  height: 100%;
}
#app{
  height: 100%;
}
.router-view{
  width: 100%;
  height: 100%;
}

</style>
