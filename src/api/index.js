// import {get,post} from './http'
import axios from 'axios'
// export const getCityInfo = (params) => {
//   let url = 'https://api.iynn.cn/film/api/v1/getCitiesInfo?cors=T&';
//   return get(url, params)
// }

export const get = uri => axios.get(uri)

export const post = (uri, data) => axios.post(uri, data)
