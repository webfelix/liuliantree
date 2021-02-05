/*
 * @Description: 路由
 * @Date: 2021-02-02 09:58:20
 */

import Vue from 'vue';
import Router from 'vue-router';
import { importAll } from '@/utils/util.js';

Vue.use(Router);

const routeModules = importAll(
    require.context('@/router/modules', false, /\.js$/)
);
const routes = routeModules.reduce(
    (finallRoutes, routerModule) =>
        finallRoutes.concat(routerModule.module),
    []
);
routes.push({
    path: '*', // 错误路由[写在最后一个]
    redirect: '/index' // 重定向
});

const router = new Router({
    mode: 'history',
    base: '/',
    routes: routes
    //    base: process.env.NODE_ENV === 'production' ? '/c' : '/',
    // scrollBehavior: () => ({
    //     y: 0
    // }), //路由跳转后页面回到顶部
});

// 全局导航守卫
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;
