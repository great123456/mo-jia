// home
import fetch from '../config/fetch'
import { API_PATH } from '../config/env'

// var API_PATH = 'http://jiadu.hanxvc.com/vue'
// test
export const sendCode = (obj) => fetch(API_PATH + '/login', obj, 'GET')

//banner
export const getBanner = (obj) => fetch(API_PATH + '/banner', obj, 'POST')
