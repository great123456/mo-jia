<template>
  <div class="invest">
    <p class="invest-text">现在还没有订单记录,赶紧来一个吧</p>
    <bottom :dex="2"></bottom>
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
   
  }
}
</script>

<style lang="scss" scoped type="text/css">
.invest{
	width:100%;
	height:100%;
  background: #f2f2f2;
  text-align: center;
  padding-top: 1px;
  font-size:13px;
}
.invest-text{
  font-size: 13px;
  margin:0px auto;
  margin-top: 50px;
  color:#999;
}
</style>
