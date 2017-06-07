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
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  }
}
</script>

<style lang="less">
// @import '~vux/src/styles/reset.less';

html, body{
  height: 100%;
}
#app{
  height: 100%;
}
.router-view{
  width: 100%;
}

/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
