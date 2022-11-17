import axios from "axios"
import type { AxiosInstance } from "axios"
import type { RequestConfig, Interceptors } from "./type"

class Request {
  instance: AxiosInstance
  interceptors: Interceptors | undefined

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    if (this.interceptors !== undefined) {
      this.instance.interceptors.request.use(this.interceptors?.requestInterceptor, this.interceptors?.requestInterceptorCatch)
      this.instance.interceptors.response.use(this.interceptors?.responseInterceptor, this.interceptors?.responseInterceptorCatch)
    }
  }
}

export default Request
