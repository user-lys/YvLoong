import axios from 'axios'

export const get = uri => axios.get(uri)

export const post = (uri, data) => axios.post(uri, data)