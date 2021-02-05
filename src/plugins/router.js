/*
 * @Description:路由初始化配置
 * @Date: 2021-02-04 13:30:48
 */

import Vue from 'vue';
import Router from 'vue-router';
import ROUTES from '../routes';
import { ROUTER_DEFAULT_CONFIG } from '../config/index';
import { routerBeforeEachFunc } from '../config/interceptors/router';

Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function(location) {
    return originalPush.call(this, location).catch(err => {
        return (err);
    });
};
// 注入默认配置和路由表
const routerInstance = new Router({
    ...ROUTER_DEFAULT_CONFIG,
    routes: ROUTES
});
// 注入拦截器
routerInstance.beforeEach(routerBeforeEachFunc);

export default routerInstance;
