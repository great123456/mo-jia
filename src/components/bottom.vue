<template>
  <div class="bottom">
    <div class="bottom">
      <van-tabbar v-model="active" style="background:#f2f2f2">
        <van-tabbar-item icon="home" to="/index">首页</van-tabbar-item>
        <van-tabbar-item icon="like-o" to="/collect">收藏</van-tabbar-item>
        <van-tabbar-item icon="shop" to="/invest">旅程</van-tabbar-item>
        <van-tabbar-item icon="contact" to="/center">我</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
    
    }
  },
  props:['dex'],
  created(){
    
  },
  computed:{
    active: {
      get: function () {
            return this.dex
          },
      set: function(){
      	
      }
    }
  },
  methods:{
   
  }
}
</script>

<style lang="scss" scoped type="text/css">
 .bottom{
    width:100%;
    background: #f2f2f2;
    position: fixed;
    left:0px;
    bottom: 0px;
  }
</style>
