<!--
 * @Description: 竞拍详情页
 * @Date: 2021-02-05 13:17:44
-->
<template>
    <div class="project-detail">
        <div class="see-container">
            <!-- <bread-crumbs :routes="routes" /> -->
            <div class="project-detail_content flex_box">
                <image-album :img-list="imgList" />
                <project-info class="flex_cell_primary" />
            </div>
            <tree-fapai />
        </div>

    </div>
</template>

<script>
// import BreadCrumbs from '@/components/business/breadCrumbs.vue';
import ImageAlbum from './components/ProjectAlbum.vue';
import ProjectInfo from './components/ProductInfo.vue';
import TreeFapai from './components/ProjectTreeFaPai.vue';
// import TreeZhaoshang from './components/ProjectTree.vue';
// import ProjectTree from './components/ProjectTree.vue';
// import ProjectTree from './components/ProjectTree.vue';
// import ProjectTree from './components/ProjectTree.vue';
export default {
    name: 'ProjectDetail',

    components: {
        ImageAlbum,
        ProjectInfo,
        TreeFapai
    },

    props: {},

    data() {
        return {
            routes: [
                {
                    path: '/index',
                    breadcrumbName: '首页'
                },
                {
                    path: 'projectDetail',
                    breadcrumbName: '胶州楼盘'
                }
            ],
            imgList: [
                require('./img/p1.png'),
                require('./img/p2.jpg'),
                require('./img/p3.jpg'),
                require('./img/p4.png'),
                require('./img/p1.png'),
                require('./img/p2.jpg'),
                require('./img/p3.jpg'),
                require('./img/p4.png'),
                require('./img/p1.png'),
                require('./img/p2.jpg'),
                require('./img/p3.jpg'),
                require('./img/p4.png')
            ]
        };
    },

    computed: {},

    mounted() {},

    methods: {}
};

</script>
<style lang='scss' scoped>
.project-detail {
    padding: 50px 0;
    background: #fff;
    .project-detail_content {
        align-items: flex-start;
    }
}
</style>
