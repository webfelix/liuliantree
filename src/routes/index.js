/*
 * @Description:
 * @Date: 2021-02-04 13:33:21
 */

import { importAll } from '@/utils/tools.js';

const routeModules = importAll(
    require.context('@/routes/modules', false, /\.js$/)
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

export default routes;
