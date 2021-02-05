/*
 * @Description:Axios配置
 * @Date: 2021-02-04 13:30:48
 */

import axios from 'axios';
import { AXIOS_DEFAULT_CONFIG } from '../config/index';
import { requestSuccessFunc, requestFailFunc, responseSuccessFunc, responseFailFunc } from '../config/interceptors/axios';

let axiosInstance = {};

axiosInstance = axios.create(AXIOS_DEFAULT_CONFIG);

// 注入请求拦截
axiosInstance.interceptors.request.use(requestSuccessFunc, requestFailFunc);

// 注入返回拦截
axiosInstance.interceptors.response.use(responseSuccessFunc, responseFailFunc);

export default axiosInstance;
