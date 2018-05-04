<template>
  <div class="login">
    <van-cell-group>
      <van-field
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
        />
      <van-field
        center
        v-model="sms"
        label="短信验证码"
        placeholder="请输入短信验证码"
        icon="clear"
        @click-icon="sms = ''"
      >
        <van-button slot="button" size="small" type="primary" @click="getMessage">发送验证码</van-button>
      </van-field>
    </van-cell-group>

    <van-button type="primary" size="large" style="height:36px;line-height:36px;margin-top: 35px;width:86%;" @click="getMessage">登录</van-button>

  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  data(){
    return {
     sms: '',
     phone: ''
    }
  },
  created(){
    
  },
  methods:{
    getMessage(){
      Toast('请输入手机号码')
    }
  }
}
</script>

<style lang="scss" scoped type="text/css">
 .login{
  width:100%;
	height:100%;
    background: #f2f2f2;
    text-align: center;
    padding-top: 1px;
    font-size:13px;
 }
</style>
