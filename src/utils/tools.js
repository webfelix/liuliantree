/*
 * @Description:工具
 * @Date: 2021-02-04 13:33:21
 */

import _this from '@/main.js';

const fileNameRE = /^\.\/([^\s]+)\.js$/;
export function importAll(modulesContext) {
    return modulesContext.keys().map((modulesPath) => {
        const moduleName = modulesPath.match(
            fileNameRE
        );
        return {
            moduleName,
            camelModuleName: moduleName[1].replace(
                /-(\w)/g,
                (_, c) => (c ? c.toUpperCase() : '')
            ),
            module: modulesContext(modulesPath).default
        };
    });
}

export function assert(condition, msg) {
    if (!condition) throw new Error(`[Apior] ${msg}`);
}

/* eslint-disable */
export function getUrlKey(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

// 序列化时间
export function DateFormat(date, fmt) {
    if(!date) return '';
    date = new Date(date);
    var o = {
        "M+": date.getMonth() + 1,                 //月份
        "d+": date.getDate(),                    //日
        "h+": date.getHours(),                   //小时
        "m+": date.getMinutes(),                 //分
        "s+": date.getSeconds(),                 //秒
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "S": date.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
export function setAuthKeyCookie(val) {
    let authKey = 'testAuthorization';
    let host = window.location.host;

    if (host == 'testcloud.seeyon.com') {
        authKey = 'testAuthorization';
    } else if (host == 'devcloud.seeyon.com') {
        authKey = 'devAuthorization';
    } else if (host == 'vprodcloud.seeyon.com') {
        authKey = 'vprodAuthorization';
    } else if (host == 'citestcloud.seeyoncloud.com') {
        authKey = 'citestAuthorization';
    } else if (host == 'cloud.seeyon.com') {
        authKey = 'prodAuthorization';
    } else if (host == 'testdhomecloud.seeyoncloud.com') {
        authKey = 'testdhomeAuthorization';
    }
    let domain = {
        domain: host.substr(host.indexOf('.') + 1)
    }
    _this.$cookie.set(authKey, val, domain);
}

// 获取AuthKey cookie值
export function getAuthKeyCookie() {
    let authKey = 'testAuthorization';
    let host = window.location.host;
    if (host == 'testcloud.seeyon.com') {
        authKey = 'testAuthorization';
    } else if (host == 'devcloud.seeyon.com') {
        authKey = 'devAuthorization';
    } else if (host == 'vprodcloud.seeyon.com') {
        authKey = 'vprodAuthorization';
    } else if (host == 'citestcloud.seeyoncloud.com') {
        authKey = 'citestAuthorization';
    } else if (host == 'cloud.seeyon.com') {
        authKey = 'prodAuthorization';
    } else if (host == 'testdhomecloud.seeyoncloud.com') {
        authKey = 'testdhomeAuthorization';
    }
    let domain = {
        domain: host.substr(host.indexOf('.') + 1)
    }

    return _this.$cookie.get(authKey, domain);
}

export function getSidKeyCookie() {
    let authKey = 'test_sid';
    let host = window.location.host;
    if (host == 'testcloud.seeyon.com') {
        authKey = 'test_sid';
    } else if (host == 'devcloud.seeyon.com') {
        authKey = 'dev_sid';
    } else if (host == 'vprodcloud.seeyon.com') {
        authKey = 'vprod_sid';
    } else if (host == 'citestcloud.seeyon.com') {
        authKey = 'citest_sid';
    } else if (host == 'testdhomecloud.seeyoncloud.com') {
        authKey = 'testdhome_sid';
    } else if (host == 'cloud.seeyon.com') {
        authKey = 'prod_sid';
    } else {
        authKey = 'dev_sid';
    }
    let domain = {
        domain: host.substr(host.indexOf('.') + 1)
    }
    return _this.$cookie.get(authKey, domain);
}

export function copyToClipboard(cont, callback) {
    var oInput = document.createElement('input');
    oInput.value = cont;
    document.body.appendChild(oInput);
    oInput.select(); // 选择对象
    oInput.className = 'oInput';
    oInput.style.position = 'fixed';
    oInput.style.top = '0';
    oInput.style.left = '0';
    oInput.style.width = '1px';
    oInput.style.height = '1px';
    oInput.style.padding = '0';
    oInput.style.border = 'none';
    oInput.style.outline = 'none';
    oInput.style.boxShadow = 'none';
    oInput.style.background = 'transparent';
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? '复制成功，您现在可以去粘贴分享' : '该浏览器不支持点击复制到剪贴板';
        callback(msg, successful);
    } catch (err) {
        callback('该浏览器不支持点击复制到剪贴板', false);
    }

    document.body.removeChild(oInput);
}

//将base64转换为文件对象
export function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);    // Uint8Array 不支持ie8、ie9
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    //转换成file对象
    return new File([u8arr], filename, { type: mime });
    //转换成成blob对象
    //return new Blob([u8arr],{type:mime});
}

// 将对象转换为URL参数
export function convertObj(data) {
    var _result = [];
    for (var key in data) {
        var value = data[key];
        if (value.constructor == Array) {
            value.forEach(function (_value) {
                _result.push(key + "=" + _value);
            });
        } else {
            _result.push(key + '=' + value);
        }
    }
    return _result.join('&');
}
// antd-Select 模糊筛选匹配
export function filterOption(inputValue, option) {
    return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
    );
}

//添加金额的￥前缀
export function addMoneyPrefix(str) {
    if (!str && str !== 0) {
        return ""
    }

    return '￥' + Number(str).toFixed(2)
}

export function dowloadFile(data,filename='文件',suffix=".xlsx"){
    if(!data) return;
    let name = filename + suffix;
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        let blob = new Blob([data], {
            type: 'application/vnd.ms-excel'
        })
        window.navigator.msSaveOrOpenBlob(blob, name)
    } else {
        /* 火狐谷歌的文件下载方式 */
        var blob = new Blob([data])
        var downloadElement = document.createElement('a')
        var href = window.URL.createObjectURL(blob)
        downloadElement.href = href
        downloadElement.download = name
        document.body.appendChild(downloadElement)
        downloadElement.click()
        document.body.removeChild(downloadElement)
        window.URL.revokeObjectURL(href)
    }
}