<template>
  <div class="success">
  	<div style="margin-top:100px;">
  	  <van-icon name="checked" class="success-checked"/>
  	  <p class="success-text">预定成功</p>
  	  <p class="count">{{count}}秒后返回主页</p>
  	</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 3,
      timer: null
    }
  },
  created(){
    self = this
    this.timer = setInterval(function(){
      self.count --
      if(self.count<=0){
      	self.count = 3
      	clearInterval(self.timer)
      	self.$router.push({
      	  path: '/index'
      	})
      }
    },1000)
  },
  methods:{
    
  }
}
</script>

<style lang="scss" scoped type="text/css">
.success{
	width:100%;
	height:100%;
    background: #f2f2f2;
    text-align: center;
    padding-top: 1px;
  .success-checked{
  	font-size:69px;
  	color:#38f;
  }
  .success-text{
    font-size: 20px;
    margin:0px auto;
    color:#38f;
    margin-top: 10px;
  }
  .count{
  	font-size: 13px;
  	margin-top: 30px;
  	color:#999;
  }
}
</style>
