import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// vue 命名增强组件
import VueSetupExtend from "vite-plugin-vue-setup-extend"

// 别名
const { resolve } = require("path")
function pathResolve(dir: string) {
  return resolve(process.cwd(), ".", dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // vue 命名增强组件
    VueSetupExtend(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";',
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@/",
        replacement: pathResolve("src") + "/",
      },
    ],
  },
})
