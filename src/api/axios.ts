import axios from 'axios'

// 创建axios实例
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
api.interceptors.request.use(
  config => {
    // 从localStorage获取token
    const token = localStorage.getItem('token')
    // 如果有token则添加到请求头
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => {
    // 请求错误处理
    console.error('Request error:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
api.interceptors.response.use(
  response => {
    // 直接返回数据部分
    return response.data
  },
  error => {
    // 错误处理
    console.error('Response error:', error)
    
    // 处理401错误（未授权）
    if (error.response && error.response.status === 401) {
      // 清除token
      localStorage.removeItem('token')
      // 重定向到登录页
      window.location.href = '/login'
    }
    
    return Promise.reject(error)
  }
)

export default api 