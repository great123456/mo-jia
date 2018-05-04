<template>
  <div class="detail">
    <div class="banner">
      <van-swipe :show-indicators="indicators" :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" style="width:100%;height:200px;"/>
          <i class="icon-collect">
            <van-icon name="like-o" style="margin-top: 5px;color:#ffffff;" v-if="showCollect" @click="showCollect=!showCollect"/>
            <van-icon name="like" style="margin-top: 5px;color:#ec5f48;" v-else @click="showCollect=!showCollect"/>
          </i>
          <span class="number">{{index+1}}/3</span>
        </van-swipe-item>
      </van-swipe>
    </div>
    
    <div class="content">
      珠江新城/小蛮腰/花城汇/体育西/琶洲商圈/近珠江边/豪华地铁大床房
    </div>
    
    <div class="introduce">
      <p class="introduce-title">房屋介绍</p>
      <p class="introduce-text">详细配置：
       1-本住宅位于25楼高层位置，全屋定制地毯，让你进门就体会到和其他公寓不一样的温馨舒适
       2、2米实木大床，宜家家居FOSSBY 弗斯比弹簧床垫，记忆海绵加袋装独立弹簧，价值3499元，让你拥有五星级的舒适睡眠，因为睡的舒服才是真正的享受
       3、蚕丝羽丝绒二合一枕头，上层100%蚕丝，下层超细聚酯纤维，是本人用过最舒服的枕头，没有之一，柔软贴服头部，回弹适中，蚕丝具有美白美容，保湿效果，价值300元
      </p>
    </div>

    <div class="introduce">
      <p class="introduce-title">周边介绍</p>
      <p class="introduce-text">珠江新城，花城汇，太阳新天地购物广场，天河城，正佳广场，天环广场，广州塔，海心沙等景点都是十多分钟能到达的地方，非常方便！小区后面就是珠江边，适合晚上散散步看看夜景,很舒服！</p>
    </div>
    
    <div class="introduce">
      <p class="introduce-title">房源位置</p>
      <p class="introduce-text">广州天河区花城大道774号新城御景二期</p>
    </div>

    <div class="introduce">
      <p class="introduce-title">预定须知</p>
      <div class="introduce-content">
        <p class="title">入住时间</p>
        <p class="text">15:00后</p>
      </div>
      <div class="introduce-content">
        <p class="title">退房时间</p>
        <p class="text">12:00前</p>
      </div>
      <div class="introduce-content">
        <p class="title">预订时长</p>
        <p class="text">随时可预订</p>
        <p class="text">最少预订1天， 最多预订天数不限</p>
      </div>
      <div class="introduce-content">
        <p class="title">退订策略</p>
        <p class="text">宽松：入住前1天12:00前退订，可获100%退款。之后退订不退款</p>
      </div>
      <div class="introduce-content">
        <p class="title">可住人数</p>
        <p class="text">可住2人，不可加客</p>
      </div>
      <div class="introduce-content">
        <p class="title">客人须知</p>
        <p class="text">允许抽烟允许聚会允许做饭允许携带宠物适合儿童（2-12岁）适合婴幼儿（2岁以下）适合老人（60岁以上）</p>
        <p class="text">客使用厨房做饭后,需要清洗干净碗筷,全屋定制地毯,所以进门需要换拖鞋,注意卫生!</p>
      </div>
    </div>

    <div class="reserve">
      <van-submit-bar
        :price="30550"
        :label="label"
        button-text="立即预定"
        @submit="onSubmit"
      />
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      label: ' ',
      indicators: false,
      showCollect: false,
      images: ['http://img3.imgtn.bdimg.com/it/u=869719161,3930111106&fm=27&gp=0.jpg','http://img5.imgtn.bdimg.com/it/u=1260077534,1747331415&fm=27&gp=0.jpg','http://img0.imgtn.bdimg.com/it/u=3209619195,1147374931&fm=11&gp=0.jpg'],
    }
  },
  created(){
    
  },
  methods:{
    onSubmit(){

    }
  }
}
</script>

<style lang="scss" scoped type="text/css">
.detail{
  width:100%;
  background: #f2f2f2;
  padding-bottom: 100px;
  .banner{
    width:100%;
    position: relative;
    .icon-collect{
      width:30px;
      height:30px;
      background: rgba(0,0,0,0.3);
      border-radius: 100%;
      position: absolute;
      top:20px;
      right:20px;
      display: inline-block;
      text-align: center;
    }
    .number{
      display: inline-block;
      color:#ffffff;
      position:absolute;
      bottom: 20px;
      right:20px;
    }
  }
  .content{
    padding:10px 1rem;
    font-size: 16px;
    font-weight: 600;
    background: #ffffff;
  }
  .introduce{
    background: #ffffff;
    margin-top: 10px;
    padding:10px 1rem;
    .introduce-title{

    }
    .introduce-content{
      font-size: 15px;
      margin-top: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #f2f2f2;
      .title{
        font-size: 15px;
      }
      .text{
        font-size: 13px;
        color:#999;
        margin-top: 5px;
      }
    }
    .introduce-text{
      margin-top: 20px;
      font-size: 13px;
      color:#999;
    }
  }
  .van-submit-bar{
    border-top: 1px solid #f2f2f2;
  }
}
</style>
