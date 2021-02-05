/*
 * @Description: 
 * @Date: 2021-02-02 09:58:20
 */
export default [
    {
        path: '/index',
        name: 'index',
        component: resolve => require(['@/views/index/Index.vue'], resolve),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/test',
        name: 'test',
        component: resolve => require(['@/views/test/Index.vue'], resolve),
        meta: {
            title: '测试'
        }
    }
];
