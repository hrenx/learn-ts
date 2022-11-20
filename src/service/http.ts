import Request from "@/service/request"

export const http = new Request({ baseURL: "https://httpbin.org", showLoading: true })
