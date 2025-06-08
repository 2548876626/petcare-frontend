import axios from 'axios'

// 创建axios实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 请求拦截器
instance.interceptors.request.use(
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
instance.interceptors.response.use(
  response => {
    // 2xx范围内的状态码会触发该函数
    // 可以根据自己的业务逻辑处理响应数据
    const res = response.data
    if (res.code && res.code !== 200) {
      // 处理业务错误
      console.error('API error:', res.message || '未知错误')
      return Promise.reject(new Error(res.message || '未知错误'))
    }
    return res
  },
  error => {
    // 超出2xx范围的状态码会触发该函数
    console.error('Response error:', error)
    // 处理401错误（未授权）
    if (error.response && error.response.status === 401) {
      // 清除token
      localStorage.removeItem('token')
      localStorage.removeItem('role')
      // 重定向到登录页
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

// 导出请求方法
export default {
  get<T = any>(url: string, params?: any): Promise<T> {
    return instance.get(url, { params })
  },
  post<T = any>(url: string, data?: any): Promise<T> {
    return instance.post(url, data)
  },
  put<T = any>(url: string, data?: any): Promise<T> {
    return instance.put(url, data)
  },
  delete<T = any>(url: string, params?: any): Promise<T> {
    return instance.delete(url, { params })
  }
} 