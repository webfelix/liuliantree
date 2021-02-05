/*
 * @Description: 首页接口
 * @Date: 2021-02-04 13:30:11
 */
export default [
    {
        name: 'auditTriailOrder',
        method: 'POST',
        host: 'cloud',
        desc: '全部订单--试用单审核',
        path: '/orderservice/order/operation/trailOrder/{orderId}/audit'
    }
];
