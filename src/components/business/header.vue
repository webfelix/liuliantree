<!--
 * @Description: 公共头部
 * @Date: 2021-02-04 14:52:39
-->
<template>
    <div class="page-header">
        <div class="see-container flex_box_between" style="height:100%;">
            <div class="flex_box">
                <img class="logo" src="@/assets/images/logo.svg" height="40">
                <div class="city">青岛</div>
            </div>
            <div class="flex_box">
                <div class="menu flex_box">
                    <div v-for="menu in menuList" :key="menu.name" class="menu-item">
                        <a :href="menu.link" class="menu-item-link">{{ menu.name }}</a>
                    </div>
                    <div class="menu-item">
                        <a class="menu-item-link">APP下载</a>
                    </div>
                </div>
                <div class="sign-entry flex_box">
                    <img src="@/assets/images/d_userImg.png" class="avator">
                    <a href="/login" style="margin-right:10px;">登录</a>
                    <a href="/regist">/注册</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',

    components: {},

    props: {},

    data() {
        return {
            menuList: [
                {
                    name: '首页',
                    link: '/indx'
                },
                {
                    name: '招商引资',
                    link: '/indx'
                },
                {
                    name: '资产推荐',
                    link: '/indx'
                },
                {
                    name: '法拍通',
                    link: '/indx'
                },
                {
                    name: '服务体系',
                    link: '/indx'
                },
                {
                    name: '关于我们',
                    link: '/indx'
                }
            ]
        };
    },

    computed: {},

    mounted() {},

    methods: {}
};

</script>
<style lang='scss' scoped>
.page-header {
    height: 95px;
    background: #fff;
    .city {
        margin-left: 24px;
        padding: 3px 17px;
        color: rgb(0, 128, 128);
        border-radius: 16px;
        border: 2px solid rgb(0, 128, 128);
    }
    .menu {
        margin-right: 40px;
        .menu-item {
            padding: 0 18px;
            height: 60px;
        }
    }
    a {
        display: inline-block;
        height: 60px;
        line-height: 60px;
        font-size: 16px;
        font-weight: 700;
        color: #333;
        &:hover {
            color: rgb(0, 128, 128);
        }
    }
    .avator {
        width: 32px;
        height: 32px;
        margin-right: 15px;
    }
}
</style>
