<template>
  <div class="tabbar-wrap">
     <tabbar>
      <tabbar-item
        v-for="tab in tabList"  
        :selected="currPage === tab.page"
        :key="tab.page"
        :link="tab.url"
      >
        <i 
          class="iconfont"
          slot="icon" 
          :class="tab.iconClass"
        ></i>
        <span slot="label">{{tab.text}}</span>
      </tabbar-item>
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
  computed: {
    currPage () {
      return this.$route.name
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>
<style lang="less">
.tabbar-wrap{
  height: 100%;
  .iconfont{
    color: #fff;
    font-size: 18px;
  }
  /**
    vux style
  **/
  .weui-tabbar, .weui-tabbar__item{
    background-color: rgba(25, 24, 30, 1);
  }
  .weui-tabbar__label{
    color: #fff;
    font-size: 14px;
  }
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__icon > i,
  .weui-tabbar__item.weui-bar__item_on .weui-tabbar__label{
    color: rgba(16, 193, 196, 1);
  }
}
</style>
