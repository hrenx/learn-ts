import { fileURLToPath, URL } from "node:url"

import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

// ElementPlus
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { createStyleImportPlugin, ElementPlusResolve } from "vite-plugin-style-import"

// https://vitejs.dev/config/
const ViteConfig = defineConfig(({ command }) => {
  return {
    base: command === "build" ? "./" : "./",
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      createStyleImportPlugin({
        resolves: [ElementPlusResolve()],
      }),
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      host: "0.0.0.0",
      port: 1234,
      open: true,
      proxy: {
        "https://httpbin.org": {
          target: "https://httpbin.org",
          ws: true,
          changeOrigin: true,
        },
      },
    },
  }
})

export default ViteConfig
