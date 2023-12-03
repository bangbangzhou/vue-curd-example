import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes =   [
  {
    path: "/",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("@/views/Tutorial/TutorialView")
  },
  {
    path: "/tutorials",
    alias: "/tutorials",
    name: "tutorials",
    component: () => import("@/views/Tutorial/TutorialView")
  },
  {
    path: "/emp",
    alias: "/emp",
    name: "emp",
    component: () => import("@/views/Emp/EmpView")
  }


]
const router = new VueRouter({
  mode: "history",
  routes
})

export default router
