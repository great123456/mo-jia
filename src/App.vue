<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/css">
@import './styles/config.scss';
#app{
	width:100%;
	height:100%;
	position:relative;
}
</style>
