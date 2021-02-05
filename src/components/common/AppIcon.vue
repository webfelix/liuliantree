<!--
 * @Description:字体图标组件
 * @Date: 2021-02-04 13:33:21
-->
<template>
    <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
        <use :xlink:href="iconHref" />
    </svg>
</template>

<script>
export default {
    name: 'SeeyonIcon',
    props: {
        iconName: {
            type: String,
            required: true
        },
        className: {
            type: String,
            default: ''
        }
    },
    computed: {
        iconHref() {
            return `#${this.iconName}`;
        },
        svgClass() {
            if (this.className) {
                return 'svg-icon ' + this.className;
            } else {
                return 'svg-icon';
            }
        }
    }
};
</script>

<style>
    .svg-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.1em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
