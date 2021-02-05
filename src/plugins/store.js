/*
 * @Description:vuex初始化配置
 * @Date: 2021-02-04 13:30:48
 */

import Vue from 'vue';
import Vuex from 'vuex';
import { VUEX_DEFAULT_CONFIG } from '../config';
import commonStore from '../service/store/';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: { ...commonStore },
    ...VUEX_DEFAULT_CONFIG,
    plugins: [createPersistedState({
        // todo:看情况是否需要全部存储,,还是只存储一小部分...
        storage: window.localStorage,
        reducer(store) {
            return {
                'user': store.user
            };
        }
    })]
});
