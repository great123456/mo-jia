<template>
  <div class="center">
    <div class="center-top">
    	<div class="login" @click="loginPage">登录</div>
    </div>

    <van-cell-group>
      <van-cell title="我的订单" icon="cart" is-link @click="orderPage"/>
      <van-cell title="优惠券" icon="shop" is-link value="1个可用优惠券"/>
      <van-cell title="联系客服" icon="chat" is-link @click="callphone"/>
    </van-cell-group>
    
    <bottom :dex="3"></bottom>
  </div>
</template>

<script>
import bottom from '@/components/bottom'
export default {
  components: {
    bottom
  },
  data(){
    return {
      
    }
  },
  created(){
    
  },
  methods:{
   loginPage(){
   	 this.$router.push({
   		path: '/login'
   	 })
   },
   orderPage(){
     this.$router.push({
   		path: '/order'
   	 })
   },
   callphone(){
   	 window.location.href = "tel:10086"
   }
  }
}
</script>

<style lang="scss" scoped type="text/css">
@import '../styles/config.scss';
.center{
	width:100%;
	height:100%;
	background: #f2f2f2;
	.center-top{
		width:100%;
		height:10rem;
		background: $theme-color;
		position: relative;
		.login{
			width:5rem;
			height:5rem;
			background: #ffffff;
			border-radius: 100%;
			font-size: 15px;
			text-align: center;
			line-height: 5rem;
		  position: absolute;
		  left:50%;
		  top:2.5rem;
		  transform: translateX(-50%);
		}
	}
}
</style>
