<template>
  <div class="search-home-wrap">
    <!-- 头部搜索 -->
    <header class="header-wrap">
      <div class="search-bar">
        <span class="search-label">上海租房<i class="iconfont icon-arrow_down_slim"></i></span>
        <input type="text" placeholder="请输入小区名/地铁/行政区/板块">
        <i class="iconfont icon-saoma iconfont-scan"></i>
      </div>
      <ul class="sub-search-bar">
        <li><i class="iconfont icon-history_thin"></i>最近浏览</li>
        <li><i class="iconfont icon-contact"></i>最近联系</li>
        <li><i class="iconfont icon-redproket"></i>最近打赏</li>
      </ul>
    </header>
    <tabbar></tabbar>
  </div>
</template>
<script>
import { Tabbar } from '@/components'
import { my as API_MY } from 'api'
import { modifyTitle, registerUrl } from 'weixin'

export default {
  components: {
    Tabbar
  },
  mounted () {
    modifyTitle('找房')
    registerUrl(location.href)
    // this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const userInfo = await API_MY.getUserInfo()
      console.log(userInfo)
    }
  }
}
</script>
<style lang="less" scoped>
@import './index';
</style>
