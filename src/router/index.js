import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import detail from '@/components/detail'
import collect from '@/components/collect'
import invest from '@/components/invest'
import center from '@/components/center'
import login from '@/components/login'
import order from '@/components/order'
import search from '@/components/search'
import pinpai from '@/components/pinpai'
import success from '@/components/success'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: index,
      meta: {
      	title: '家度民宿'
      }
    },{
      path: '/index',
      name: 'index',
      component: index,
      meta: {
        title: '家度民宿'
      }
    },{
      path: '/detail',
      name: 'detail',
      component: detail,
      meta: {
        title: '商品详情'
      }
    },{
      path: '/collect',
      name: 'collect',
      component: collect,
      meta: {
        title: '收藏列表'
      }
    },{
      path: '/invest',
      name: 'invest',
      component: invest,
      meta: {
        title: '投资收益'
      }
    },{
      path: '/center',
      name: 'center',
      component: center,
      meta: {
        title: '个人中心'
      }
    },{
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录'
      }
    },{
      path: '/order',
      name: 'order',
      component: order,
      meta: {
        title: '订单列表'
      }
    },{
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        title: '民宿搜索'
      }
    },{
      path: '/pinpai',
      name: 'pinpai',
      component: pinpai,
      meta: {
        title: '品牌训练营'
      }
    },{
      path: '/success',
      name: 'success',
      component: success,
      meta: {
        title: '预定成功'
      }
    }
  ]
})

router.afterEach((to,from,next)=>{
  if(to.meta.title){
  	document.title = to.meta.title
  }
})
export default router
