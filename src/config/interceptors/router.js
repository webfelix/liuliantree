/*
 * @Description:router拦截器
 * @Date: 2021-02-04 13:31:00
 */
import store from '@/plugins/store';

export function routerBeforeEachFunc(to, from, next) {
    const exceptionPage = ['designList', 'designEdit'];
    if (exceptionPage.includes(to.name)) {
        next();
        return true;
    }

    // 这里可以做页面拦截，很多后台系统中也非常喜欢在这里面做权限处理
    const auth = store.state.user.toLogin;
    // if (to.name != 'login' && !auth) {
    //     //未登录
    //     next({
    //         path: '/login'
    //     })
    // }
    next();
}
