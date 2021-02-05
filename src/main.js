/*
 * @Description:
 * @Date: 2021-02-02 09:50:23
 */
import Vue from 'vue';
import App from './App.vue';

// 引入插件
import inject from './plugins/inject';
import router from './plugins/router';
import store from './plugins/store';
Vue.use(inject);
import './assets/style/baseClass.scss';

export default new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
