import axios from "axios";

// 取消请求
let CancelToken = axios.CancelToken
axios.create({
    timeout: 15000
})

// 请求统一拦截处理
axios.interceptors.request.use(config => {
    // 发出请求之前做处理（添加 token、时间戳、拦截相同请求等）
    return config
}, error => {
    return Promise.reject(error)
})

// 响应统一拦截处理
axios.interceptors.response.use(res => {
    if (res.status === 200) {
        return res.data
    }
}, error => {
    return Promise.reject(error)
})

export default axios
