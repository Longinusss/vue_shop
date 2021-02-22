import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(VueRouter)
// 获取路由对象
const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      // 重定向
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      component: Home
    }
  ]
})

// 为路由对象挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to:将要访问的路径
  // from 从哪个路径跳转而来
  // next 函数,表示放行
  // 访问首页,直接放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  return next()
})
// 默认输出
export default router
