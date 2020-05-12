import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/welcome.vue'
import Users from '../components/users/Users.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes:[
    { path: '/', redirect:'/login' },
    { path: '/login', component: Login, name: 'login' },
    {
  path: '/home',
  component: Home,
      redirect: '/Welcome',
  children: [
    { path: '/welcome', component: Welcome },
    { path: '/users', component: Users }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')
  next()
})

export default router
