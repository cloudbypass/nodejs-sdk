import cloudbypass, {isBypassError} from "./index.js";

// cloudbypass.get("https://ipinfo.io/json",{cb_apikey: "xxx"}).then(res => {
//     console.log(res.data);
// }).catch(err => {
//     console.log(isBypassError(err))
//     if (isBypassError(err)) {
//         console.log(err.response.data);
//     } else {
//         console.log(err);
//     }
// })

const proxy = cloudbypass.createProxy("username-res:password");

// 提取动态代理
console.log("Extract dynamic proxy: ")
console.log(proxy.setDynamic().toString())
console.log(proxy.setRegion("US").toString())

// 提取时效代理并指定地区
console.log("Extract proxy with expire and region: ")
console.log(proxy.copy().setExpire(60 * 30).setRegion("US").toString())

// 批量提取
console.log("Extract five 10-minute aging proxies: ")
const pool = proxy.copy().setExpire(60 * 10).limit(5);
for (let p of pool) {
    console.log(p)
}

// 循环提取
console.log("Loop two 10-minute aging proxies: ")
const loop = proxy.copy().setExpire(60 * 10).loop(2, 'username:password:gateway');
for (let i = 0; i < 10; i++) {
    console.log(loop.next().value)
}