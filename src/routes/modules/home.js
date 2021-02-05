/*
 * @Description:
 * @Date: 2021-02-04 13:33:21
 */

export default [
    {
        name: 'index',
        path: '/index',
        component: resolve => require(['@/views/index/Index.vue'], resolve),
        meta: {
            hideHeader: true,
            title: '首页'
        }
    }
];
