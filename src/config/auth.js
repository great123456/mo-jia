const appid = 'wx887b35612d441de2'
const path = encodeURIComponent('http://m.hanxvc.com')
let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${path}&response_type=code&scope=snsapi_userinfo#wechat_redirect`
export const getcode = function(){
  window.location.href = url
}
