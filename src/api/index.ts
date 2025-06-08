import api from './axios'

// 导出请求方法
export default {
  get<T = any>(url: string, params?: any): Promise<T> {
    return api.get(url, { params })
  },
  post<T = any>(url: string, data?: any): Promise<T> {
    return api.post(url, data)
  },
  put<T = any>(url: string, data?: any): Promise<T> {
    return api.put(url, data)
  },
  delete<T = any>(url: string, params?: any): Promise<T> {
    return api.delete(url, { params })
  }
} 