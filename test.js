import cloudbypass, {isBypassError} from "./index.js";


/*try {
    const resp = (await cloudbypass.get("https://etherscan.io/accounts/label/lido", {
        cb_use_v2: true
    }));
    console.log(resp.headers['set-cookie']);
    console.log(resp.data);
} catch (e) {
    if (isBypassError(e)) {
        console.log(e.response.data || e.response || e.message);
    } else {
        console.log(e);
    }
}*/

console.log(await cloudbypass.getBalance("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", "example@cloudbypass.cn"))

// const proxy = cloudbypass.createProxy("username-res:password");
//
// // 提取动态代理
// console.log("Extract dynamic proxy: ")
// console.log(proxy.setDynamic().toString())
// console.log(proxy.setRegion("US").toString())
//
// // 提取时效代理并指定地区
// console.log("Extract proxy with expire and region: ")
// console.log(proxy.copy().setExpire(60 * 30).setRegion("US").toString())
//
// // 批量提取
// console.log("Extract five 10-minute aging proxies: ")
// const pool = proxy.copy().setExpire(60 * 10).limit(5);
// for (let p of pool) {
//     console.log(p)
// }
//
// // 循环提取
// console.log("Loop two 10-minute aging proxies: ")
// const loop = proxy.copy().setExpire(60 * 10).loop(2, 'username:password:gateway');
// for (let i = 0; i < 10; i++) {
//     console.log(loop.next().value)
// }