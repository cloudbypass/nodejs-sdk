// Cloudbypass v0.0.1 Copyright (c) 2023 NULL and contributors
'use strict';

const axios = require('axios');
const url = require('url');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
const url__default = /*#__PURE__*/_interopDefaultLegacy(url);

const getEnv = (key, defaultValue) => {
    try {
        if (process.env[key]) {
            return process.env[key] || defaultValue;
        }
    } catch (err) {
        /* pass */
    }

    return defaultValue;
};


const getApiHost = (apihost) => {
    const apiHost = apihost || getEnv("CB_APIHOST", "https://api.cloudbypass.com");

    if (!apiHost.match(/^((?:http|https):(\/\/)?)([\w.-]+)(:(\d+))?$/)) {
        throw new Error("Invalid APIHOST");
    }

    return apiHost;
};

const parseOptions = (options) => {
    const _options = {
        "disable-redirect": true, "full-cookie": true,
    };

    if (typeof options === "string") {
        options.split(",").forEach(option => {
            _options[option.trim()] = true;
        });
    } else if (typeof options === "object") {
        if (Array.isArray(options)) {
            options.forEach(option => {
                _options[option.trim()] = true;
            });
        } else {
            Object.keys(options).forEach(key => {
                _options[key.trim()] = options[key];
            });
        }
    }

    return Object.keys(_options).map(key => {
        return _options[key] ? key : "";
    }).join(",");
};

const inherits = (constructor, superConstructor, props, descriptors) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
};

const isObject = (thing) => thing !== null && typeof thing === 'object';

function BypassError(axiosError) {
    const {request, response} = axiosError;
    const {id, code, message} = response.data;

    this.name = 'BypassError';
    id && (this.id = id);
    message && (this.message = message);
    code && (this.code = code);
    request && (this.request = request);
    response && (this.response = response);
}

inherits(BypassError, Error, {
    toJSON: function toJSON() {
        return {
            message: this.message, name: this.name, id: this.id, code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    }
});

const prototype = BypassError.prototype;

Object.defineProperty(prototype, 'isBypassError', {value: true});

function isBypassError(payload) {
    return isObject(payload) && (payload.isBypassError === true);
}

const getBalance = async (apikey) => {
    return axios__default["default"].get('https://console.cloudbypass.com/api/v1/balance?apikey=' + getEnv("CB_APIKEY", apikey))
        .then(res => {
            return res.data?.balance || -1;
        })
};

const ENV_APIKEY = getEnv("CB_APIKEY", "");
const ENV_PROXY = getEnv("CB_PROXY", "");

const cloudbypass = axios__default["default"].create({});
const cloudbypassInterceptorHelper = (_axios) => {
    _axios.interceptors.request.use(config => {
        const u = url__default["default"].parse(config.url);
        const proxy = config.cb_proxy || ENV_PROXY;
        config.headers = {
            "x-cb-apikey": config.cb_apikey || ENV_APIKEY,
            "x-cb-host": u.host,
            "x-cb-options": parseOptions(config.cb_options),
            "x-cb-protocol": u.protocol.replace(":", ""),
        };
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
        if (error?.AxiosError && error.response && error.response.data) {
            throw new BypassError(error);
        }
        return Promise.reject(error);
    });

    return _axios;
};

cloudbypass.create = function (options) {
    return cloudbypassInterceptorHelper(axios__default["default"].create(options));
};

cloudbypassInterceptorHelper(cloudbypass);

["get", "post", "put", "delete", "head", "options", "patch"].forEach(method => {
    cloudbypass[method] = function (url, config) {
        return this.request(Object.assign(config || {}, {
            method: method, url: url || config.url
        }));
    };
});

cloudbypass.isBypassError = isBypassError;
cloudbypass.getBalance = getBalance;

cloudbypass.default = cloudbypass;

module.exports = cloudbypass;
//# sourceMappingURL=cloudbypass.cjs.map
