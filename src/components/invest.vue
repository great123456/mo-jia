<template>
  <div class="invest">
    投资
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
</style>
