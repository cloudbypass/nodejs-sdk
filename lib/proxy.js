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

    format(format_str = 'username:password@gateway') {
        return format_str.replace('username', this.parseOptions()).replace('password', this.password).replace('gateway', this.gateway);
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

    * limit(count) {
        if (count <= 0) {
            throw new Error('Count must be greater than 0');
        }

        for (let i = 0; i < count; i++) {
            this.__sessionId = null;
            yield this.format();
        }
    }

    * loop(count) {
        if (count <= 0) {
            throw new Error('Count must be greater than 0');
        }

        const pool = [];

        for (let i = 0; i < count; i++) {
            this.__sessionId = null;
            const proxy = this.format();
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

export default CloudbypassProxy;