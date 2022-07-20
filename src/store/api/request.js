import axios from 'axios'

const request = axios.create({
    baseURL: 'http://localhost:1337/api/'
})

request.interceptors.request.use(config => config, err => Promise.reject(err))

request.interceptors.response.use(res => res.data, err => Promise.reject(err))

export default request