/*
 * @Description:loading
 * @Date: 2021-02-04 13:33:21
 */
import myLoading from './loading.vue';
import Vue from 'vue';
const Loading = Vue.extend(myLoading);
const Profile = new Loading({
    el: document.createElement('div')
});

// 插入到 document.body
document.body.appendChild(Profile.$el);
// 定义显示隐藏的方法  open 会传入一个text 字符串。如果有则赋值给组件内默认值。
const myLoadingMethod = {
    open(text) {
        Profile.show = true;
        if (text) {
            Profile.text = text;
        }
    },
    hide() {
        Profile.show = false;
    }
};
export default myLoadingMethod;
