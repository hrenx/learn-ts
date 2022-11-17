import axios from "axios"
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import type { RequestConfig, Interceptors } from "./type"

class Request {
  instance: AxiosInstance
  interceptors: Interceptors | undefined

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    // 实例的拦截器
    if (this.interceptors !== undefined) {
      this.instance.interceptors.request.use(this.interceptors?.requestInterceptor, this.interceptors?.requestInterceptorCatch)
      this.instance.interceptors.response.use(this.interceptors?.responseInterceptor, this.interceptors?.responseInterceptorCatch)
    }

    // 类全局的拦截器
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => config)
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (err: any) => err
    )
  }

  // 请求函数
  async request(config: RequestConfig): Promise<AxiosResponse<any, any>> {
    // 单个请求上的拦截器
    if (config.interceptors?.requestInterceptor) config.interceptors.requestInterceptor(config)
    const response: AxiosResponse = await this.instance.request(config)
    if (config.interceptors?.responseInterceptor) config.interceptors.responseInterceptor(response)
    return response
  }
}

export default Request
