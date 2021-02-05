/*
 * @Description: 插件注入
 * @Date: 2021-02-04 13:30:48
 */

import axios from './axios'
import api from './api'
import consts from './const'
import myLoadingMethod from '../components/common/loading/index'
import VueCookie from 'vue-cookie';
import { antdMessage, antdConfirm } from './antdv';
import antd from './antdv';
import filters from './filter';
import AppIcon from '@/components/common/AppIcon'
import '@/assets/fonts/iconfont.js'

import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

GLOBAL.ajax = axios

export default {
    install: (Vue, options) => {
        Vue.component('app-icon', AppIcon)

        Vue.prototype.$api = api
        Vue.prototype.$ajax = axios
        Vue.prototype.$const = consts
        Vue.prototype.$loading = myLoadingMethod;
        Vue.prototype.$cookie = VueCookie;
        Vue.prototype.$message = antdMessage;
        Vue.prototype.$confirm = antdConfirm;
        Vue.use(antd)
        Vue.use(VueAwesomeSwiper)
        Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));
        // 需要挂载的都放在这里
    }
}
