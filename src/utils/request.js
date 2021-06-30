import axios from 'axios'
import {getItem} from '@/utils/localStorage'

const request = axios.create({
  baseURL:"http://api-toutiao-web.itheima.net"
})

request.interceptors.request.use((config)=>{
  // 设置请求头
  config.headers['Authorization'] ='Beare '+ getItem('user').token
  // console.log(getItem('user').token)
  return config
})

export default request