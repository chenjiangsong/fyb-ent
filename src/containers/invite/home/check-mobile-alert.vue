<template>
  <alert v-model="showValue" button-text="好的">
    <p>
      <label>手机号：</label><span>{{checkResult.mobile | spaceMobile}}({{checkResult.userName ? checkResult.userName + '|' + checkResult.userId : '未注册过'}})</span>
    </p>
    <p>
      <label>业务城市：</label><span>{{checkResult.cityName ? checkResult.cityName : ''}}</span>
    </p>
    <p>
      <label>注册：</label><span v-if="checkResult.registerTimeStr">{{checkResult.registerTimeStr}}<span v-if="checkResult.registerUserName">{{'('+ checkResult.registerUserName + '|' +  checkResult.registerUserId + ')'}}</span></span>
    </p>
    <p>
      <label>审核：</label><span v-if="checkResult.registerTimeStr">{{checkResult.certifyTimeStr}}<span v-if="checkResult.certifyUserName">{{'('+checkResult.certifyUserName +'|'+ checkResult.certifyUserId + ')'}}</span></span>
    </p>
    <p>
      <label>账号状态：</label><span><i>{{checkResult.ifCertify ? '认证成功' : '未认证'}}</i>  <i v-if="checkResult.ifCertify">{{checkResult.disable ? '有效':'冻结' }}</i></span>
    </p>
  </alert>
</template>
<script>
import { Alert } from 'vux'
export default {
  name: 'check-mobile-alert',
  components: {
    Alert
  },
  props: {
    value: Boolean,
    checkResult: Object
  },
  data () {
    return {
      showValue: false
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    }
  }
}
</script>
<style lang="less">
</style>
