<template>
  <div class="collect">
   <p class="collect-text">现在还没有收藏,赶紧去收藏一个吧</p>
   <bottom :dex="1"></bottom>
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
.collect{
	width:100%;
	height:100%;
    background: #f2f2f2;
    text-align: center;
    padding-top: 1px;
  .collect-text{
    font-size: 13px;
    margin:0px auto;
    margin-top: 50px;
    color:#999;
  } 
}
</style>
