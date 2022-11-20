import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import type { RequestConfig, Interceptors } from "./type"
import { ElLoading } from "element-plus"
import type { LoadingInstance } from "element-plus/lib/components/loading/src/loading"

const DEFAULT_LOADING = false

class Request {
  instance: AxiosInstance
  interceptors: Interceptors | undefined
  loadingInstance?: LoadingInstance
  showLoading?: boolean

  constructor(config: RequestConfig = {}) {
    this.instance = axios.create(config)
    this.interceptors = config?.interceptors
    this.showLoading = config?.showLoading ?? DEFAULT_LOADING

    // 实例的拦截器
    if (this.interceptors !== undefined) {
      this.instance.interceptors.request.use(this.interceptors?.requestInterceptor, this.interceptors?.requestInterceptorCatch)
      this.instance.interceptors.response.use(this.interceptors?.responseInterceptor, this.interceptors?.responseInterceptorCatch)
    }

    // 类全局的拦截器
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      if (this.showLoading) this.loadingInstance = ElLoading.service({ fullscreen: true, text: "请求中", background: "rgba(0,0,0,.3)" })
      return config
    })
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // TODO: 并发请求
        this.loadingInstance?.close()
        return response
      },
      (error: any) => {
        this.loadingInstance?.close()
        return error
      }
    )
  }

  // 请求函数
  async request<T>(config: RequestConfig): Promise<AxiosResponse<T, any>> {
    // 单个请求上的拦截器
    if (config.interceptors?.requestInterceptor) config.interceptors.requestInterceptor(config)
    const response: AxiosResponse = await this.instance.request(config)
    if (config.interceptors?.responseInterceptor) config.interceptors.responseInterceptor(response)
    return Promise.resolve(response)
  }

  get<T>(url: string, params: object): Promise<AxiosResponse<T, any>> {
    return this.request<T>({ method: "GET", url, params })
  }
  post<T>(url: string, data: object): Promise<AxiosResponse<T, any>> {
    return this.request<T>({ method: "POST", url, data })
  }
  delete<T>(url: string, data: object): Promise<AxiosResponse<T, any>> {
    return this.request<T>({ method: "DELETE", url, data })
  }
  patch<T>(url: string, data: object): Promise<AxiosResponse<T, any>> {
    return this.request<T>({ method: "PATCH", url, data })
  }
}

export default Request
