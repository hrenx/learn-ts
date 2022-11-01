const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("@/views/layout/layout.vue"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/home/home.vue"),
      },
    ],
  },
]

export default routes
