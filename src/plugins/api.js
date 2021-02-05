/*
 * @Description: axios接口请求封装
 * @Date: 2021-02-04 13:30:48
 */

import axios from './axios';
import _assign from 'lodash/assign';
import _isEmpty from 'lodash/isEmpty';

import { assert } from '../utils/tools';
import { API_DEFAULT_CONFIG } from '../config';
import API_CONFIG from '../service/api';
import _const from '../plugins/const';

class MakeApi {
    constructor(options) {
        this.api = {};
        this.apiBuilder(options);
    }

    apiBuilder({
        sep = '|',
        config = {},
        mock = false,
        debug = false,
        mockBaseURL = ''
    }) {
        Object.keys(config).map(namespace => {
            this._apiSingleBuilder({
                namespace,
                mock,
                mockBaseURL,
                sep,
                debug,
                config: config[namespace]
            });
        });
    }

    _apiSingleBuilder({
        namespace,
        sep = '|',
        config = {},
        mock = false,
        debug = false,
        mockBaseURL = ''
    }) {
        config.forEach(api => {
            const { name, desc, method, path, host, responseType = 'json' } = api;
            const isMock = process.env.NODE_ENV === 'production' ? false : mock;
            const url = isMock ? (mockBaseURL + '/mock/35' + path) : path;
            const baseURL = host ? _const['HOST/ADDRESS'][host] : '';

            debug && assert(name, `${url} :接口name属性不能为空`);
            Object.defineProperty(this.api, `${namespace}${sep}${name}`, {
                value(outerParams, outerOptions) {
                    let realUrl = url;

                    if (Object.prototype.toString.call(outerParams) == '[object FormData]') {
                        return axios({ url: realUrl, desc, baseURL, method, data: outerParams });
                    }

                    if (Object.prototype.toString.call(outerParams) == '[object Array]') {
                        return axios({ url: realUrl, desc, baseURL, method, data: outerParams });
                    }

                    if (!_isEmpty(outerParams)) {
                        const keys = Object.keys(outerParams);
                        keys.map(k => {
                            const reger = new RegExp('{' + k + '}', 'gmi');
                            if (reger.test(realUrl)) {
                                realUrl = realUrl.replace(reger, outerParams[k]);
                                delete outerParams[k];
                            }
                        });
                    }
                    const _options = { url: realUrl, desc, baseURL, method, responseType };
                    return axios(_normoalize(_assign(_options, outerOptions), outerParams));
                }
            });
        });
    }
}

function _normoalize(options, data) {
    if (options.method !== 'GET' && !options.data) {
        if (_isEmpty(data)) {
            options.data = {};
        } else {
            options.data = data;
        }
    }
    return options;
}

export default new MakeApi({
    config: API_CONFIG,
    ...API_DEFAULT_CONFIG
})['api'];

