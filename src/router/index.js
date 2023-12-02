import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes =   [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("@/views/Tutorial/TutorialView")
  }
]
const router = new VueRouter({
  mode: "history",
  routes
})

export default router
