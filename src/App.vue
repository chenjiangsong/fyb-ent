<template>
  <div id="app">
    <transition name="bounce">
      <router-view></router-view>
    </transition>
    <loading v-model="renderStatus"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    Loading
  },
  computed: {
    ...mapGetters({
      renderStatus: 'renderStatus'
    })
  },
  data () {
    return {
      transitionName: ''
    }
  },
  created () {
    console.log('created')
  },
  mounted () {
    console.log('mounted')
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
    renderStatus (newVal, oldVal) {
      console.log(newVal, oldVal)
    }
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


/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
