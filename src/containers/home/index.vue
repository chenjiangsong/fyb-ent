<template>
  <div class="fyb-home-wrap">
    <tabbar>
      <tabbar-item
        v-for="tab in tabList"  
        :selected="currPage === tab.page"
      >
        <i 
          class="iconfont" 
          slot="icon" 
          :class="tab.iconClass"
        ></i>
        <span slot="label">{{tab.text}}</span>
      </tabbar-item>
      <!--<tabbar-item>
        <span slot="label">发房</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">联盟</span>
      </tabbar-item>
      <tabbar-item>
        <span slot="label">我的</span>
      </tabbar-item>-->
    </tabbar>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
import { homeTabList } from 'config'
export default {
  data () {
    return {
      tabList: homeTabList
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style lang="less">
.fyb-home-wrap{
  height: 100%;
  .iconfont{
    color: #fff;
  }
  /**
    vux
  **/
  .weui-tabbar, .weui-tabbar__item{
    background-color: rgba(25, 24, 30, 1);
  }
  .weui-tabbar__label{
    color: #fff;
  }
}
</style>
