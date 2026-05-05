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

const UNITS = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];

/**
 * Format byte count as a human-readable string (1024-based).
 * @param {number} value
 * @param {string} [endUnit="Y"]
 * @returns {string}
 */
const convertBytes = (value, endUnit = "Y") => {
    if (!value) {
        return "0";
    }
    let eu = endUnit;
    if (eu.length === 1) {
        eu = eu.toUpperCase();
    }
    const endIdx = UNITS.indexOf(eu);
    if (endIdx === -1) {
        throw new Error(`Invalid endUnit: ${endUnit}`);
    }
    let unit = 0;
    let v = Number(value);
    while (v >= 1024) {
        v /= 1024;
        unit += 1;
        if (unit === endIdx) {
            break;
        }
    }
    return `${v.toFixed(2)} ${UNITS[unit]}B`;
};

export {
    getEnv, getApiHost, parseOptions, inherits, isObject, convertBytes
}