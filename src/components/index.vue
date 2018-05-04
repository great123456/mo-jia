<template>
  <div class="index">
    <div class="search">
      <van-search placeholder="请输入名称进行搜索" v-model="value" style="width:90%;margin-left: 5%" @click="searchPach"/>
    </div>

    <div class="banner">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" style="width:100%;height:200px;"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    

    <div class="option">
      <ul>
        <li v-for="item in optionList" @click="detailPage">
          <img :src="item.url" alt="">
          <p class="option-text ellipsis">{{item.text}}</p>
          <p class="option-description">{{item.description}}</p>
          <p class="option-price">￥{{item.price}}</p>
        </li>
      </ul>
      <p class="total">已加载全部数据</p>
    </div>
    
    <bottom :dex="0"></bottom>

  </div>
</template>

<script>
import { Waterfall } from 'vant'
import bottom from '@/components/bottom'
export default {
  components: {
    bottom
  },
  data(){
    return {
      value: '',
      optionValue: '',
      showSearch: false,
      images: ['http://img5.imgtn.bdimg.com/it/u=1260077534,1747331415&fm=27&gp=0.jpg','http://img0.imgtn.bdimg.com/it/u=3209619195,1147374931&fm=11&gp=0.jpg','http://img3.imgtn.bdimg.com/it/u=869719161,3930111106&fm=27&gp=0.jpg'],
      optionList: [{
        text: '京溪南方医院正儿八经青年旅社',
        url: 'https://img.meituan.net/phoenix/6c822660b88b7f9ecabdc759b27c1d6f49837.jpg@400w_300h_80Q_1l',
        description: '整套 · 3室2厅1厨2卫',
        price: '58'
      },{
        text: '[限时特惠]简居 广州白云机场 独立私家大影房 1.8米大床整套出租 近3号线龙归地铁站 人和地铁站',
        url: 'https://p1.meituan.net/iphoenix/8cd3492caec2f9abd261a07b252ff9e77447286.jpg@400w_300h_80Q_1l',
        description: '整套 · 1室1厅1厨2卫',
        price: '169'
      },{
        text: '珠江新城/小蛮腰/花城汇/体育西/琶洲商圈/近珠江边/豪华地铁大床房',
        url: 'https://p0.meituan.net/iphoenix/0c1aa4234337b938e4f19c7e46e805f42692231.jpg@400w_300h_80Q_1l',
        description: '整套 · 1室1厨1卫',
        price: '268'
      },{
        text: '长隆地铁复式2房1.8床*广交会南站直达*时尚小清新',
        url: 'https://img.meituan.net/iphoenix/e59ac0510dd05774c315e97821741b551085275.jpg@400w_300h_80Q_1l',
        description: '整套 · 1室2厅1厨1卫',
        price: '368'
      },{
        text: '京溪南方医院正儿八经青年旅社',
        url: 'https://img.meituan.net/phoenix/6c822660b88b7f9ecabdc759b27c1d6f49837.jpg@400w_300h_80Q_1l',
        description: '整套 · 3室2厅1厨2卫',
        price: '58'
      },{
        text: '京溪南方医院正儿八经青年旅社',
        url: 'https://img.meituan.net/phoenix/6c822660b88b7f9ecabdc759b27c1d6f49837.jpg@400w_300h_80Q_1l',
        description: '整套 · 3室2厅1厨2卫',
        price: '58'
      },{
        text: '京溪南方医院正儿八经青年旅社',
        url: 'https://img.meituan.net/phoenix/6c822660b88b7f9ecabdc759b27c1d6f49837.jpg@400w_300h_80Q_1l',
        description: '整套 · 3室2厅1厨2卫',
        price: '58'
      },{
        text: '珠江新城/小蛮腰/花城汇/体育西/琶洲商圈/近珠江边/豪华地铁大床房',
        url: 'https://p0.meituan.net/iphoenix/0c1aa4234337b938e4f19c7e46e805f42692231.jpg@400w_300h_80Q_1l',
        description: '整套 · 1室1厨1卫',
        price: '268'
      }]
    }
  },
  created(){
    
  },
  methods:{
    detailPage(){
      this.$router.push({
       path: '/detail'
      })
    },
    onSearch(){

    },
    onCancel(){
      this.showSearch = false
    },
    searchPach(){
      this.$router.push({
       path: '/search'
      })
    }
  }
}
</script>

<style lang="scss" scoped type="text/css">
@import '../styles/config.scss';
.index{
  width:100%;
  padding-top: 1px;
  .banner{
    width:100%;
  }
  .search{
    margin: 10px auto;
  }
  .option{
    width:100%;
    background: #ffffff;
    padding-bottom:100px;
    ul{
      width:100%;
      padding:0px 1rem;
      margin:10px auto;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      box-sizing: border-box;
      li{
        width:50%;
        box-sizing: border-box;
        margin-top: 15px;
        img{
          width:100%;
          height:auto;
        }
        .option-text{
          width:100%;
          font-size:14px;
        }
        .option-description{
          font-size: 13px;
          color:#999;
        }
        .option-price{
          color:#ec5f48;
          text-align: left;
          text-indent: -5px;
        }
      }
      li:nth-of-type(n){
        padding-right: 5px;
      }
      li:nth-of-type(2n){
        padding-left: 5px;
      }
    }
    .total{
      text-align: center;
      font-size: 13px;
      color:#999;
      margin-top: 20px;
    }
  }
}
</style>
