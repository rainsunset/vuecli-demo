import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routers'
import store from '@/store'
import iView from 'iview'
import { getToken, canTurnTo } from '@/libs/util'

Vue.use(Router)
const LOGIN_PAGE_NAME = 'login'
const router = new Router({
    routes: routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start()
    const token = getToken()
    if (!token && to.name !== LOGIN_PAGE_NAME) {
        // 未登录且要跳转的页面不是登录页 - 跳转到登录页
        next({ name: LOGIN_PAGE_NAME })
    } else if (!token && to.name === LOGIN_PAGE_NAME) {
        // 未登陆且要跳转的页面是登录页 跳转
        next()
    } else if (token && to.name === LOGIN_PAGE_NAME) {
        // 已登录且要跳转的页面是登录页 - 跳转到home页
        next({ name: 'home' })
    } else {
        // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
        store.dispatch('getUserInfo').then(user => {
            if (canTurnTo(to.name, user.access, routes)) {
                next()
            } else {
                next({replace: true, name: 'error_401'}) // 无权限，重定向到401页面
            }
        })
    }
})

router.afterEach(to => {
    iView.LoadingBar.finish()
    window.scrollTo(0, 0)
})

export default router
