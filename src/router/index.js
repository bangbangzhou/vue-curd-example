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
  },
  {
    path: "/register",
    alias: "/register",
    name: "register",
    component: () => import("@/views/SignUp/SignUpView")
  },

  {
    path: "/login",
    alias: "/login",
    name: "login",
    component: () => import("@/views/Login/LoginView")
  },


]
const router = new VueRouter({
  mode: "history",
  routes
})


router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router
