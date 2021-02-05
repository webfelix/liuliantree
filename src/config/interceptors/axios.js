/*
 * @Description:axios拦截器
 * @Date: 2021-02-04 13:31:00
 */
import _this from '@/main';
import store from '@/plugins/store.js';
import { getAuthKeyCookie, setAuthKeyCookie } from '@/utils/tools.js';

export function requestSuccessFunc(requestObj) {
    // CONSOLE_REQUEST_ENABLE && console.warn('【request-interceptor】', `url: ${requestObj.url}`, requestObj)
    // 自定义请求拦截逻辑，可以处理权限，请求发送监控等
    const host = window.location.host;
    let accessToken = '';
    if (host.indexOf('localhost') > -1) {
        accessToken = _this.$store.state.user.token;
    } else {
        accessToken = getAuthKeyCookie();
    }
    if (accessToken && accessToken.indexOf('Bearer') < 0) {
        accessToken = 'Bearer ' + accessToken;
    }
    requestObj.headers.Authorization = accessToken;

    return requestObj;
}

export function requestFailFunc(requestError) {
    // 自定义发送请求失败逻辑，断网，请求发送监控等
    // ...
    return Promise.reject(requestError);
}

export function responseSuccessFunc(responseObj) {
    // 浏览器级别错误直接返回
    if (responseObj.status != 200) {
        return Promise.reject(responseObj);
    }

    // 自定义响应成功逻辑，全局拦截接口，根据不同业务做不同处理，响应成功监控等
    const resData = responseObj;
    const { code } = resData.data;
    if (resData.status == 200 && !code) {
        return resData.data;
    }
    switch (code) {
        case 1:
            return resData.data;
        case '1000': // 如果业务成功，直接进成功回调
            return resData.data;
        case '200': // 如果业务成功，直接进成功回调
            return resData.data;
        case '000':
        case 200:
            return resData.data.data;
        default:
            // 业务中还会有一些特殊 code 逻辑，我们可以在这里做统一处理，也可以下方它们到业务层
            // !responseObj.config.noShowDefaultError && GLOBAL.vbus.$emit('business.response.incorrect', resData.msg);
            if (!resData.config.customError && resData.data) {
                const msg = resData.data.message ? resData.data.message : '系统错误';
                _this.$message.error(msg);
            }

            return Promise.reject(resData.data);
    }
}

export function responseFailFunc(responseError) {
    // 响应失败，可根据 responseError.message 和 responseError.response.status 来做监控处理
    console.log('token过期');
    // token过期，跳转到登录页
    if (responseError.response && responseError.response.status == 401) {
        // 清空用户信息
        setAuthKeyCookie('');
        store.commit('user/SET_TO_LOGIN', false);
        store.commit('user/SET_TOKEN', '');
        store.commit('user/SET_USER', '');
        const backUrl = _this.$route.fullPath;
        _this.$router.push({
            path: '/login',
            query: {
                back_url: backUrl
            }
        });
        return false;
    }
    if (responseError.response && responseError.response.status == 403) {
        _this.$message.error('您暂无此功能权限，请联系协同云运营人员');
        return Promise.reject(responseError.response.data);
    }
    const config = responseError.config;

    if (!config.customError && responseError.response && responseError.response.data) {
        const msg = responseError.response.data.message ? responseError.response.data.message : '系统错误';
        _this.$message.error(msg);
    }

    return Promise.reject(responseError.response.data);
}
