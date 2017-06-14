<template>
  <div class="my-button" :style="{backgroudColor: color}" @click="click">
    {{text}}
  </div>  
</template>
<script>
export default {
  props: {
    color: String,
    text: String
  },
  methods: {
    click () {
      this.$emit('on-click')
    }
  }
}
</script>
<style lang="less">
.my-button{
  margin: 16px auto 0;
  width: 90%;
  height: 48px;
  line-height: 48px;
  text-align: center;
  background-color: rgba(16, 193, 196, 1);
  color: #fff;
  text-align: center;
  border-radius: 4px;
  font-size: 16px;
}
</style>
