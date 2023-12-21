import axios from 'axios';
import {wrapper} from 'axios-cookiejar-support';
import {CookieJar} from 'tough-cookie';
import url from 'url';
import {getEnv, getApiHost, parseOptions} from './utils.js';
import BypassError from './error/BypassError.js';
import isBypassError from './error/isBypassError.js';
import {getBalance} from './api.js';

const ENV_APIKEY = getEnv("CB_APIKEY", "");
const ENV_PROXY = getEnv("CB_PROXY", "");

const cloudbypass = wrapper(axios.create({
    jar: new CookieJar(),
}));
const cloudbypassInterceptorHelper = (_axios) => {
    _axios.interceptors.request.use(config => {
        const u = url.parse(config.url);
        const proxy = config.cb_proxy || ENV_PROXY;
        config.headers = {
            "x-cb-apikey": config.cb_apikey || ENV_APIKEY,
            "x-cb-host": u.host,
            "x-cb-options": parseOptions(config.cb_options),
            "x-cb-protocol": u.protocol.replace(":", ""),
        }
        if (proxy) {
            config.headers["x-cb-proxy"] = proxy;
        }
        config.url = getApiHost(config.cb_apihost) + u.path;
        return config;
    }, error => {
        return Promise.reject(error);
    });
    _axios.interceptors.response.use(response => {
        return response;
    }, error => {
        if (error.name === "AxiosError" && error.response && error.response.data) {
            throw new BypassError(error);
        }
        return Promise.reject(error);
    });

    return _axios;
}

cloudbypass.create = function (options) {
    options = options || {};
    options.jar = options.jar || new CookieJar();
    return cloudbypassInterceptorHelper(
        wrapper(axios.create(options))
    );
};

cloudbypassInterceptorHelper(cloudbypass);

["get", "post", "put", "delete", "head", "options", "patch"].forEach(method => {
    cloudbypass[method] = function (url, config) {
        return this.request(Object.assign(config || {}, {
            method: method, url: url || config.url
        }));
    }
});

cloudbypass.isBypassError = isBypassError;
cloudbypass.getBalance = getBalance;

cloudbypass.default = cloudbypass;

export default cloudbypass;