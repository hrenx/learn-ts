import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes/routes"

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
