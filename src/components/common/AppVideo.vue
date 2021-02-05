<!--
 * @Description:视频播放组件
 * @Date: 2021-02-04 13:33:21
-->
<template>
    <div class="video">
        <videoPlayer
            ref="player"
            :options="playerOptions"
            class="video__player"
            :playsinline="true"
        />
    </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player';
import 'video.js/dist/video-js.css';

export default {
    components: {
        videoPlayer
    },

    props: {
        videoAddress: {
            type: String,
            required: true
        }
    },

    data() {
        return {
            playerOptions: {
                // videojs options
                playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
                autoplay: false, // 如果true,浏览器准备好时开始回放。
                muted: false, // 默认情况下将会消除任何音频。
                loop: false, // 导致视频一结束就重新开始。
                preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                language: 'zh-cn',
                notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
                controls: true,
                aspectRatio: '16:9',
                sources: [
                    {
                        type: 'video/mp4',
                        src: this.videoAddress
                    }
                ],
                controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true // 全屏按钮
                }
                // poster: require("@/assets/images/loading.gif"),
            }
        };
    },

    computed: {},
    watch: {
        videoAddress: function(val) {
            this.playerOptions.sources[0].src = val;
        }
    },

    methods: {
        playVideo() {
            this.$refs.player.player.play();
        },
        stopPlay() {
            this.$refs.player.player.ended();
        }
    }
};
</script>
<style lang='scss'>
.video {
    .video__player {
        position: relative;
        width: 100%;
        object-fit: contain;
        text-align: center;

        .video-js {
            max-width: 100%;
            position: static;
            display: inline-block;
            .vjs-big-play-button {
                height: 1.5em;
                width: 1.5em;
                border-radius: 50%;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
            }
            .vjs-time-control {
                display: block;
                padding-left: 0;
                padding-right: 0;
                min-width: unset;
            }
        }
        video {
            width: 100%;
        }
    }
}
</style>
