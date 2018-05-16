// home
import fetch from '../config/fetch'
import { API_PATH } from '../config/env'

// test
export const sendCode = (obj) => fetch(API_PATH + '/login', obj, 'POST')
