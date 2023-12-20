const getEnv = (key, defaultValue) => {
    try {
        if (process.env[key]) {
            return process.env[key] || defaultValue;
        }
    } catch (err) {
        /* pass */
    }

    return defaultValue;
}


const getApiHost = (apihost) => {
    const apiHost = apihost || getEnv("CB_APIHOST", "https://api.cloudbypass.com");

    if (!apiHost.match(/^((?:http|https):(\/\/)?)([\w.-]+)(:(\d+))?$/)) {
        throw new Error("Invalid APIHOST");
    }

    return apiHost;
}

const parseOptions = (options) => {
    const _options = {
        "disable-redirect": true, "full-cookie": true,
    }

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
}

const inherits = (constructor, superConstructor, props, descriptors) => {
    constructor.prototype = Object.create(superConstructor.prototype, descriptors);
    constructor.prototype.constructor = constructor;
    Object.defineProperty(constructor, 'super', {
        value: superConstructor.prototype
    });
    props && Object.assign(constructor.prototype, props);
}

const isObject = (thing) => thing !== null && typeof thing === 'object';

export {
    getEnv, getApiHost, parseOptions, inherits, isObject
}