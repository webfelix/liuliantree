/*
 * @Description:全局过滤器
 * @Date: 2021-02-04 13:30:48
 */

import { DateFormat } from '@/utils/tools.js';

const formatTime = function(value, formatStr) { // author: meizz
    return DateFormat(Number(value), formatStr);
};

export default {
    formatTime
};
