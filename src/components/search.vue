<template>
  <div class="search">
    <div class="search-container">
      <form action="/">
        <van-search
          v-model="optionValue"
          style="width:90%;margin-left: 5%;background:#fffffff;"
          placeholder="请输入民宿名称进行搜索"
          show-action
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      optionValue: ''
    }
  },
  methods:{
    onSearch(){

    },
    onCancel(){
      this.$router.push({
       path: '/index'
      })
    }
  }
}
</script>

<style lang="scss" scoped type="text/css">
 .search{
 	width:100%;
 	height:100%;
 	background: #f2f2f2;
 	overflow: hidden;
    .search-container{
      padding-top: 10px;
      width:100%;
      background: #f2f2f2;
    }
  }
</style>
