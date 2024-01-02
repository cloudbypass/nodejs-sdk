// Cloudbypass v0.0.2 Copyright (c) 2024 NULL and contributors
'use strict';

const axios = require('axios');
const axiosCookiejarSupport = require('axios-cookiejar-support');
const toughCookie = require('tough-cookie');
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

class CloudbypassProxy {

    constructor(auth, kwargs = {}) {
        const {username, password} = CloudbypassProxy.checkAuth(auth);
        this.username = username;
        this.password = password;
        this.region = kwargs.region || null;
        this.expire = kwargs.expire || null;
        this.gateway = kwargs.gateway || 'gw.cloudbypass.com:1288';
        this.__sessionId = null;
    }

    static checkAuth(auth) {
        // ^(\w+-(res|dat)):(\w+)$
        const content = /^(\w+-(res|dat)):(\w+)$/.exec(auth);
        if (!content) {
            throw new Error('Invalid auth format');
        }
        return {
            username: content[1],
            password: content[3],
        };
    }

    setExpire(expire) {
        this.expire = expire;
        this.__sessionId = null;
        return this;
    }

    setDynamic() {
        return this.setExpire(0);
    }

    setGateway(gateway) {
        this.gateway = gateway;
        this.__sessionId = null;
        return this;
    }

    setRegion(region) {
        this.region = region;
        this.__sessionId = null;
        return this;
    }

    clearRegion() {
        this.region = null;
        this.__sessionId = null;
        return this;
    }

    get sessionId() {
        if (!this.__sessionId) {
            // 0123456789abcdefghijklmnopqrstuvwxyz 随机11位
            this.__sessionId = Math.random().toString(36).substr(2);
        }
        return this.__sessionId;
    }

    parseOptions() {
        const options = [
            this.username
        ];
        if (this.region) {
            options.push(this.region.replace(/\s+/g, '+'));
        }
        let expire = this.expire;
        if (expire) {
            for (let val of [[60, "s"], [60, "m"], [24, "h"], [999, "d"]]) {
                const [time, unit] = val;
                if (expire < time || expire % time) {
                    options.push(`${this.sessionId}-${expire}${unit}`);
                    break;
                }
                expire /= time;
            }
        }
        return options.join('_');
    }

    format(format_str) {
        return (format_str || 'username:password@gateway')
            .replace('username', this.parseOptions())
            .replace('password', this.password)
            .replace('gateway', this.gateway);
    }

    toString() {
        return this.format();
    }

    copy() {
        return new CloudbypassProxy(`${this.username}:${this.password}`, {
            region: this.region,
            expire: this.expire,
            gateway: this.gateway,
        });
    }

    * limit(count, format_str) {
        if (count <= 0) {
            throw new Error('Count must be greater than 0');
        }

        for (let i = 0; i < count; i++) {
            this.__sessionId = null;
            yield this.format(format_str);
        }
    }

    * loop(count, format_str) {
        if (count <= 0) {
            throw new Error('Count must be greater than 0');
        }

        const pool = [];

        for (let i = 0; i < count; i++) {
            this.__sessionId = null;
            const proxy = this.format(format_str);
            pool.push(proxy);
            yield proxy;
        }

        while (true) {
            for (let i = 0; i < count; i++) {
                yield pool[i];
            }
        }
    }
}

const ENV_APIKEY = getEnv("CB_APIKEY", "");
const ENV_PROXY = getEnv("CB_PROXY", "");

const cloudbypass = axiosCookiejarSupport.wrapper(axios__default["default"].create({
    jar: new toughCookie.CookieJar(),
}));
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
        if (error.name === "AxiosError" && error.response && error.response.data) {
            throw new BypassError(error);
        }
        return Promise.reject(error);
    });

    return _axios;
};

cloudbypass.create = function (options) {
    options = options || {};
    options.jar = options.jar || new toughCookie.CookieJar();
    return cloudbypassInterceptorHelper(
        axiosCookiejarSupport.wrapper(axios__default["default"].create(options))
    );
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
cloudbypass.BypassError = BypassError;
cloudbypass.createProxy = function (auth) {
    return new CloudbypassProxy(auth);
};

cloudbypass.default = cloudbypass;

module.exports = cloudbypass;
//# sourceMappingURL=cloudbypass.cjs.map
