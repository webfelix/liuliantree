<!--
 * @Description:图片裁剪上传
 * @Date: 2021-02-04 13:33:21
-->
<template>
    <a-modal
        :title="title"
        :visible.sync="showDialog"
        class="set-img-dialog"
        width="535px"
        :footer="null"
        :mask-closable="false"
        :keyboard="false"
        @cancel="closeDialog"
    >
        <div class="upload-cont">
            <label class="btn btn-upload" for="uploads">
                <a-icon type="upload" /> 选择要上传的图片
            </label>
        </div>
        <div class="cropper-content flex_box">
            <div class="cropper">
                <vueCropper
                    ref="cropper"
                    :img="option.img"
                    :output-size="option.size"
                    :output-type="option.outputType"
                    :info="true"
                    :full="option.full"
                    :can-move="option.canMove"
                    :can-move-box="option.canMoveBox"
                    :original="option.original"
                    :auto-crop="option.autoCrop"
                    :auto-crop-width="option.autoCropWidth"
                    :auto-crop-height="option.autoCropHeight"
                    :fixed-box="option.fixedBox"
                    :fixed-number="option.fixedNumber"
                    :fixed="option.fixed"
                    @realTime="realTime"
                    @imgLoad="imgLoad"
                />
            </div>
            <div
                class="show-preview"
            >
                <div
                    :style="Object.assign({}, previews.div, {
                        'transform': `scale(${160 / previews.w}, ${160 / previews.w})`
                    })"
                    class="preview"
                >
                    <img :src="previews.url" :style="previews.img">
                </div>
            </div>
        </div>
        <div class="handle-cont">
            <input id="uploads" type="file" :value="imgFile" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
            <div class="handle-item" title="放大" @click="changeScale(1)">
                <app-icon icon-name="khkj-jiahao" />
            </div>
            <div class="handle-item" title="缩小" @click="changeScale(-1)">
                <app-icon icon-name="khkj-jianhao" />
            </div>
            <div class="handle-item" title="左旋转" @click="rotateLeft">
                <app-icon icon-name="khkjxiangzuoxuanzhuan" />
            </div>
            <div class="handle-item" title="右旋转" @click="rotateRight">
                <app-icon icon-name="khkjxiangyouxuanzhuan" />
            </div>
            <div class="handle-item" value="确定" @click="finish()">
                <app-icon icon-name="khkj-duigou" />
            </div>
        </div>
    </a-modal>
</template>

<script>
import { VueCropper } from 'vue-cropper';

export default {
    components: {
        VueCropper
    },
    props: {
        title: {
            type: String,
            default: '修改头像',
            required: false
        },
        accept: {
            type: Array,
            required: false,
            default: function() {
                return ['gif', 'jpg', 'jpeg', 'png', 'bmp'];
            }
        }
    },
    data() {
        return {
            showDialog: true,
            previews: {},
            option: {
                img: '',
                outputSize: 1, // 剪切后的图片质量（0.1-1）
                full: false, // 输出原图比例截图 props名full
                outputType: 'png',
                info: false,
                canMove: true,
                original: false,
                canMoveBox: true,
                autoCrop: true,
                autoCropWidth: 300,
                autoCropHeight: 300,
                fixedBox: false,
                fixed: true,
                fixedNumber: [1, 1]
            },
            fileName: '', // 本机文件地址
            downImg: '#',
            imgFile: '',
            originalImg: null
        };
    },
    methods: {
        // 放大/缩小
        changeScale(num) {
            num = num || 1;
            this.$refs.cropper.changeScale(num);
        },
        // 坐旋转
        rotateLeft() {
            this.$refs.cropper.rotateLeft();
        },
        // 右旋转
        rotateRight() {
            this.$refs.cropper.rotateRight();
        },
        // 确定头像
        finish() {
            this.$refs.cropper.getCropData((data) => {
                // data 为base64图片格式
                this.$emit('cropperSucc', data, this.fileName, this.originalImg);
                this.closeDialog();
            });
        },
        // 实时预览函数
        realTime(data) {
            this.previews = data;
        },
        // 下载图片
        down(type) {
            var aLink = document.createElement('a');
            aLink.download = 'author-img';
            if (type === 'blob') {
                this.$refs.cropper.getCropBlob((data) => {
                    this.downImg = window.URL.createObjectURL(data);
                    aLink.href = window.URL.createObjectURL(data);
                    aLink.click();
                });
            } else {
                this.$refs.cropper.getCropData((data) => {
                    this.downImg = data;
                    aLink.href = data;
                    aLink.click();
                });
            }
        },
        // 选择本地图片
        uploadImg(e, num) {
            var _this = this;
            // 上传图片
            var file = e.target.files[0];
            _this.fileName = file.name;
            var reg = new RegExp('\.(' + _this.accept.join('|') + ')$', 'i');
            if (!reg.test(e.target.value)) {
                _this.$message.info({ content: `图片类型必须是.${_this.accept.join(', ')}中的一种` });
                return false;
            }
            this.originalImg = file;
            var reader = new FileReader();
            reader.onload = (e) => {
                let data;
                if (typeof e.target.result === 'object') {
                    // 把Array Buffer转化为blob 如果是base64不需要
                    data = window.URL.createObjectURL(new Blob([e.target.result]));
                } else {
                    data = e.target.result;
                }
                if (num === 1) {
                    _this.option.img = data;
                } else if (num === 2) {
                    _this.example2.img = data;
                }
            };
            // 转化为base64
            // reader.readAsDataURL(file)
            // 转化为blob
            reader.readAsArrayBuffer(file);
        },
        imgLoad(msg) {

        },
        closeDialog() {
            this.$emit('closeCropper');
        }
    }
};
</script>

<style lang="scss">
.set-img-dialog {
    .upload-cont {
        margin-bottom: 25px;
        .btn-upload {
            padding: 7px 14px;
            color: #333;
            background-color: #e6e6e6;
            border-color: #e6e6e6;
            cursor: pointer;
        }
    }
    .cropper-content{
        align-items: flex-start;
        .cropper{
            width: 300px;
            height: 300px;
            margin-right: 30px;
        }
        .show-preview{
            width: 160px;
            height: 160px;
            overflow: hidden;
            border-radius: 5px;
            border: 1px solid #e3e3e3;
            background: #fcfcfc;
            display: flex;
            align-items: center;
            justify-content: center;
            .preview {
                flex: 0 0 auto;
            }
            img {
                max-width: inherit;
            }
        }
    }
    .handle-cont {
        margin-top: 30px;
        text-align: center;
        .handle-item {
            display: inline-block;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid #e3e3e3;
            border-radius: 2px;
            font-size: 16px;
            margin-right: 10px;
            cursor: pointer;
            &:last-child {
                margin-right: 0;
            }
        }
    }
}
</style>
