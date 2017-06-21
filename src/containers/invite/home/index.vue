<template>
  <div class="invite-home-wrap">
    <header class="header-bg">
      <img :src="bgUrl" alt="">
    </header>
    
    <group>
      
      <x-input
        title="姓名"
        placeholder="请填写您朋友的姓名"
        label-width="4em"
        v-model="name"
        :show-clear="false"
      ></x-input>

      <x-input
        title="手机"
        placeholder="请填写您朋友微信绑定的手机号"
        label-width="4em"
        :max="11"
        v-model="mobile"
        :show-clear="false"
        @on-change="filterPhone"
        ref="mobileInput"
      >
        <div
          slot="right"
          class="check-mobile-btn"
          @click="checkMobile"
          v-if="mobile.length === 11"
        >
          检测号码
        </div>
      </x-input>
      <x-input
        title="城市"
        v-model="defaultCity"
        disabled
        label-width="4em"
      ></x-input>
    </group>

    <group>
      <radio :options="radioOptions" v-model="guideValue"></radio>
    </group>

    <my-button text="邀请" @on-click="submit"></my-button>
    <p class="tips">我们会对信息进行加密，保护您及您朋友的隐私！</p>

    <check-mobile-alert v-model="show" :check-result="checkResult"></check-mobile-alert>
  </div>  
</template>
<script>
import bgUrl from 'assets/invite_bg.png'
import { Group, XInput, Radio } from 'vux'
import { MyButton } from '@/components'
import CheckMobileAlert from './check-mobile-alert.vue'
import { filterNum } from 'util'
import { API_MY } from 'api'

export default {
  data () {
    return {
      bgUrl: bgUrl,
      defaultCity: '上海',
      radioOptions: [
        {
          key: 'publish',
          value: '主推发房'
        },
        {
          key: 'find',
          value: '主推看房'
        }
      ],
      guideValue: '',
      name: '',
      mobile: '',
      checkResult: {},
      show: false
    }
  },
  created () {
    modifyTitle('邀请注册')
  },
  methods: {
    async checkMobile () {
      const params = {
        mobile: this.mobile
      }
      const res = await API_MY.checkMobile(params)
      if (res.status === 1) {
        console.log(res)
        this.checkResult = res.data
      }
    },
    submit () {
      smallnote(this.mobile)
    },
    filterPhone (e) {
      this.mobile = filterNum(this.mobile)
      this.$refs.mobileInput.currentValue = this.mobile
    }
  },
  components: {
    Group,
    XInput,
    Radio,
    MyButton,
    CheckMobileAlert
  }
}
</script>
<style lang="less">
.invite-home-wrap{
  background-color: #fff;
  .header-bg{
    img {
      width: 100%;
    }
  }
  .check-mobile-btn{
    position: absolute;
    top: 7px;
    right: 12px;
    line-height: 1.5em;
    height: 1.5em;
    font-size: 14px; /*no*/
    padding: 5px;
    background-color: #10c1c4;
    color: #fff;
    border-radius: 4px; /*no*/
  }
  input:disabled{
    -webkit-text-fill-color:#000;
    -webkit-opacity:1;
  }
  .tips{
    margin-top: 12px;
    text-align: center;
    font-size: 13px;
    color: #757575;
  }
  /*
    vux
  */
  .weui-label{
    color: rgba(117, 117, 117, 0.87);
  }
  .vux-radio-label {
    color: rgba(117, 117, 117, 0.87);
  }
}
</style>
