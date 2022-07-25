import axios from 'axios'

const request = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL + 'api/'
})

request.interceptors.request.use(config => config, err => Promise.reject(err))

request.interceptors.response.use(res => res.data, err => Promise.reject(err))

export default request