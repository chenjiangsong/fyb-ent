<template>
  <div class="search-home-wrap">
    <!-- 头部搜索 -->
    <header class="header-wrap">
      <div class="search-bar">
        <span class="search-label" @click="log">上海租房<i class="iconfont icon-arrow_down_slim"></i></span>
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
    },
    log () {
      this.$events.emit('log', {
        sk: 12,
        ck: 12121
      })
    }
  }
}
</script>
<style lang="less" scoped>
.header-wrap {
  overflow: hidden;
  background-color: #fff;
  border-bottom: 1px solid rgb(217, 217, 217);
  .tab {
    height: 36px;
    line-height: 36px;
    width: 180px;
    margin: 0 auto;
    display: flex;
  }

  .tab-item {
    flex: 1;
    text-align: center;
    position: relative;
  }

  span {
    display: inline-block;
  }

  .checked-sell span {
    color: rgba(16, 193, 196, 1);
    border-bottom: 2px solid rgba(16, 193, 196, 1);
  }

  .checked-rent span {
    color: rgba(125, 160, 192, 1);
    border-bottom: 2px solid rgba(125, 160, 192, 1);
  }

  .search-bar {
    width: 344px;
    height: 36px;
    line-height: 36px;
    margin: 10px auto;
    border: 1px solid rgb(217, 217, 217);
    border-radius: 3px;
    overflow: hidden;
    background-color: rgb(247, 247, 247);
    display: flex;
    font-size: 14px; 

    .icon-message {
      color: rgb(178, 178, 178);
      padding: 0 5px; 
      position: relative;
      top: 1px; 
    }
    .iconfont-scan{
      width: 32px; 
      text-align: center;
    }
    input {
      flex: 1;
      width: 100%;
      display: block;
      background-color: transparent;
    }
  }
  .sub-search-bar{
    display: flex;
    border-top: 1px solid rgb(217, 217, 217);
    height: 36px; 
    line-height: 36px; 
    color: rgb(117, 117, 117);
    .iconfont{
      margin-right: 4px; 
    }
    li{
      flex: 1;
      text-align: center;
      border-right: 1px solid rgb(217, 217, 217);
      &:last-child{
        border-right: 0;
      }
    }
  }
  .search-label{
    display: inline-block;
    padding: 0 8px 0 6px; 
    color: rgb(117,117,117);
    font-weight: 500;
  }
  .blue{
    color: rgba(125, 160, 192, 1);
  }
  .green{
    color: rgba(16, 193, 196, 1);
  }
  .icon-arrow_down_slim{
    font-size: 8px;
  }
}
</style>
