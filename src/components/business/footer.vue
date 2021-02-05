<!--
 * @Description: 公共底部
 * @Date: 2021-02-04 18:39:05
-->
<template>
    <div class="page-footer">
        <div class="see-container footer-container">
            <div class="flex_box_between" style="align-items: flex-start;">
                <div class="footer-list flex_box">
                    <div class="footer-item">
                        <div><img src="@/assets/images/footer_logo.png" alt=""></div>
                        <div class="m-t-10">服务时间：周一至周五 8:30-17:30</div>
                    </div>
                    <div class="footer-item">
                        <div class="footer-item_title">商务合作</div>
                        <div>Cooperative Alliance</div>
                        <div class="footer-item_contact">
                            <div>联系人：韩小姐</div>
                            <div>邮箱：service@iworks.cn</div>
                            <div>手机：13589339894</div>
                        </div>
                    </div>
                    <div class="footer-item">
                        <div class="footer-item_title">青岛分部</div>
                        <div>Communication Co. Ltd</div>
                        <div class="footer-item_contact">
                            <div>地址：青岛市市北区敦化路328号A座2203</div>
                            <div>电话：400-611-2611</div>
                            <div>邮箱：service@iworks.cn</div>
                        </div>
                    </div>
                </div>
                <div class="code">
                    <img src="@/assets/images/weixin_code.png" alt="">
                    <div class="text-center" style="margin-top:10px;">关注榴莲树公众号</div>
                </div>
            </div>
            <div class="copy-right">© 2021 liulianshu 鲁ICP备2020046315号-1 京公网安备 11010802017518 技术支持：回音科技</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageFooter',

    components: {},

    props: {},

    data() {
        return {

        };
    },

    computed: {},

    mounted() {},

    methods: {}
};

</script>
<style lang='scss' scoped>
.m-t-10 {
    margin-top: 10px;
}
.page-footer {
    .footer-container {
        padding: 30px 0 10px;
    }
    .footer-list {
        align-items: flex-start;
        .footer-item {
            width: 290px;
            font-size: 12px;
            color: #999;
        }
        .footer-item_title {
            font-size: 16px;
            color: #666;
            margin-bottom: 6px;
        }
        .footer-item_contact {
            margin-top: 20px;
            line-height: 28px;
        }
    }
    .copy-right {
        margin-top: 30px;
        font-size: 12px;
        color: #aaa;
        opacity: .7;
    }
}
</style>
