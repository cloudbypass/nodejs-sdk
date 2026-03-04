import axios from 'axios';
import {wrapper} from 'axios-cookiejar-support';
import {CookieJar} from 'tough-cookie';
import {getEnv, getApiHost, parseOptions} from './utils.js';
import BypassError from './error/BypassError.js';
import isBypassError from './error/isBypassError.js';
import {getBalance} from './api.js';
import CloudbypassProxy from "./proxy.js";

const ENV_APIKEY = getEnv("CLOUDBYPASS_APIKEY", "") || getEnv("CB_APIKEY", "");
const ENV_PROXY = getEnv("CLOUDBYPASS_PROXY", "") || getEnv("CB_PROXY", "");

const cloudbypass = wrapper(axios.create({
    jar: new CookieJar(),
}));
const cloudbypassInterceptorHelper = (_axios) => {
    _axios.interceptors.request.use(config => {
        const u = new URL(config.url, 'http://localhost');
        const proxy = config.cb_proxy || ENV_PROXY;
        config.headers = {
            "x-cb-apikey": config.cb_apikey || ENV_APIKEY,
            "x-cb-host": u.host,
            "x-cb-options": parseOptions(config.cb_options),
            "x-cb-protocol": u.protocol.replace(":", ""),
            ...(config.headers || {})
        }
        if (proxy) {
            config.headers["x-cb-proxy"] = proxy;
        }
        // Handle version: cb_version takes priority, then cb_use_v2 (deprecated), then cb_part, default is "1"
        if (config.cb_version) {
            config.headers["x-cb-version"] = config.cb_version;
        } else if (config.cb_use_v2) {
            // @deprecated: Use cb_version instead
            config.headers["x-cb-version"] = "2";
        } else if (config.cb_part) {
            config.headers["x-cb-part"] = config.cb_part;
            config.headers["x-cb-version"] = "2";
        } else {
            config.headers["x-cb-version"] = "1";
        }
        config.url = getApiHost(config.cb_apihost) + u.pathname + u.search;
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
    cloudbypass[method] = function (url, data, config) {
        if (method === "get") {
            config = data;
            data = undefined;
        }
        return this.request({
            method,
            url,
            data,
            ...config
        });
    }
});

cloudbypass.isBypassError = isBypassError;
cloudbypass.getBalance = getBalance;
cloudbypass.BypassError = BypassError;
cloudbypass.createProxy = function (auth) {
    return new CloudbypassProxy(auth);
}

cloudbypass.default = cloudbypass;

export default cloudbypass;