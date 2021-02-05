/*
 * @Description:api域名
 * @Date: 2021-02-04 13:30:11
 */

export default [{
    name: 'ADDRESS',
    value: {
        'cloud': process.env.VUE_APP_BASECLOUD,
        'chome': process.env.VUE_APP_BASECHOME,
        'dhome': process.env.VUE_APP_DHOME,
        'order': process.env.VUE_APP_BASEORDER,
        'dcc': process.env.VUE_APP_DCC
    }
}];
