/*
 * @Description:用户数据存储到vuex
 * @Date: 2021-02-04 13:30:11
 */

import api from '@/plugins/api';
const state = () => ({
    isLogin: false,
    userInfo: {},
    token: ''
});

// getters
const getters = {
    userInfoGetter: state => state.userinfo
};

// actions
const actions = {};

// mutations
const mutations = {
    'SET_TO_LOGIN'(state, boolean) {
        state.isLogin = boolean;
    },
    'SET_TOKEN'(state, resData) {
        state.token = resData;
    },
    'SET_USER_INFO'(state, resData) {
        state.userInfo = resData;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
