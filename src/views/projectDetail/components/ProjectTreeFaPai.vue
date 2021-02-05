<!--
 * @Description: 法拍通详情tab
 * @Date: 2021-02-05 18:21:21
-->
<template>
    <div class="project-tree">
        <div class="anchor-tree flex_box_between">
            <div class="flex_box">
                <a
                    v-for="(tab,index) in projectTabs"
                    :key="index"
                    :href="tab.href"
                    class="anchor-tree-link"
                    :class="{active:curIndex == index}"
                    @click="curIndex = index"
                >{{ tab.label }}</a>
            </div>
            <div>扫一扫 手机参拍</div>
        </div>
        <div class="project-tree-container flex_box">
            <div class="project-tree-cont flex_cell_primary">
                <!-- 资产详情 -->
                <div id="asset-details">
                    <div class="title">资产详情</div>
                    <div class="tree-title">资产介绍</div>
                    <div class="file-download flex_box">
                        <div class="file">下载相关文件</div>
                        <div>
                            <span class="file pointer">合同相关说明.png</span>
                            <span class="file pointer">合同相关说明.pdf</span>
                        </div>
                    </div>
                    <div class="tree-cont">这里是富文本编辑展示的内容区</div>
                </div>
                <!-- 竞价公告 -->
                <div id="asset-details">
                    <div class="title">竞价公告</div>
                    <div class="tree-cont">这里是富文本编辑展示的内容区</div>
                </div>
                <!-- 竞价须知 -->
                <div id="asset-details">
                    <div class="title">竞价须知</div>
                    <div class="tree-cont">这里是富文本编辑展示的内容区</div>
                </div>
                <!-- 授权书，有授权书才展示该模块 -->
                <div id="asset-details">
                    <div class="title">授权书</div>
                    <div class="tree-cont">这里是富文本编辑展示的内容区</div>
                </div>
            </div>
            <div class="code-cont">
                <img src="@/assets/images/weixin_code.png" alt="">
                <div style="margin:50px 0 10px;">扫一扫</div>
                <div>手机上随时随地出价</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',

    components: {},

    props: {},

    data() {
        return {
            curIndex: 0,
            projectTabs: [
                {
                    label: '资产详情',
                    href: '#asset-details'
                },
                {
                    label: '竞价公告',
                    href: '#bidding-announcement'
                },
                {
                    label: '竞价须知',
                    href: '#bidding-instructions'
                },
                {
                    label: '授权书',
                    href: '#certificate-authorization'
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
.project-tree {
    padding: 100px 0 30px;
    font-size: 16px;
    .anchor-tree {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 60px;
        padding-right: 35px;
        background-color: #f5f5f6;
        .anchor-tree-link {
            position: relative;
            width: 115px;
            height: 60px;
            line-height: 60px;
            text-align: center;

            color: #333;
            cursor: pointer;
            &.active {
                color: #007979;
                &::before {
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #007979;
                    height: 4px;
                    content: "";
                }
            }
        }
    }
    .project-tree-container {
        align-items: flex-start;
    }
    .project-tree-cont {
        padding: 0 24px 50px;
        border-left: 1px solid #f2f2f2;
        border-right: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
    }
    .title {
        height: 160px;
        line-height: 160px;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        color: #007979;
    }
    .tree-title {
        height: 50px;
        line-height: 50px;
        margin: 24px 0;
        padding-left: 20px;
        background-color: rgba(0, 121, 121, 0.05);
        font-size: 16px;
        font-weight: 700;
        color: #007979;
        border-left: 5px solid #007979;
    }
    .file-download {
        margin: 40px 0;
        font-size: 16px;
        font-weight: 700;
        color: #007979;
        .file {
            margin-right: 35px;
            &.pointer {
                cursor: pointer;
            }
        }
    }
    .tree-cont {
        margin: 40px 0;
        img {
            max-width: 100%;
        }
    }
    .code-cont {
        width: 240px;
        padding-top: 45px;
        text-align: center;
    }
}

</style>
