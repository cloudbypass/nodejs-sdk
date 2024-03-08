<p align="center">
  <a href="https://cloudbypass.com/" target="_blank" rel="noopener noreferrer" >
    <div align="center">
        <img src="https://raw.githubusercontent.com/cloudbypass/example/main/assets/img.png" alt="Cloudbypass" height="50">
    </div>
  </a>
</p>

## Cloudbypass SDK for Nodejs

### 开始使用

> Cloudbypass Nodejs SDK 依赖于 [Axios](https://axios-http.com/)。

保留axios的所有请求配置，并支持**⚠跨域请求**和Cookie管理。

使用`getBalance`方法可以查询当前账户余额。

[![npm version](https://img.shields.io/npm/v/cloudbypass-sdk.svg?style=flat-square)](https://www.npmjs.org/package/cloudbypass-sdk)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=cloudbypass-sdk&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=cloudbypass-sdk)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/cloudbypass-sdk?style=flat-square)](https://bundlephobia.com/package/cloudbypass-sdk@latest)

### 安装

#### 包管理器安装

Using npm:

```shell
$ npm install cloudbypass-sdk
```

Using yarn:

```shell
$ yarn add cloudbypass-sdk
```

Using pnpm:

```shell
$ pnpm add cloudbypass-sdk
```

### 使用

安装包后，您可以使用import以下require方法导入库：

```js
// Using Node.js `require()`
const cloudbypass = require('cloudbypass-sdk');
```

或者，如果您使用的是ES模块：

```js
// Using ES6 imports
import cloudbypass from 'cloudbypass-sdk';
```

### 发起请求

引入`cloudbypass-sdk`后，您可以将其当作`axios`使用。

`config`参数支持所有`axios`的请求配置，并支持一下配置：

- `cb_apikey` API密钥;
- `cb_part` 使用V2时设置part参数即可;
- `cb_proxy` 代理地址，支持http和socks5代理;
- `cb_apihost` 定制用户可以使用自己的API服务器;

> 以上参数可使用环境变量`CB_APIKEY`、`CB_PROXY`和`CB_APIHOST`进行配置。

```js
import cloudbypass from 'cloudbypass-sdk';
// Using Node.js `require()`
// const cloudbypass = require('cloudbypass-sdk'); 

cloudbypass.get('https://opensea.io/category/memberships', {
    cb_apikey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
})
    .then(function (response) {
        console.log(response.status, response.headers.get("x-cb-status"));
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error.response.data || error.response || error.message);
    });
```

### 使用V2

穿云API V2适用于需要通过JS质询验证的网站。例如访问https://etherscan.io/accounts/label/lido ，请求示例：

```js
import cloudbypass from 'cloudbypass';
// Using Node.js `require()`
// const cloudbypass = require('cloudbypass');

cloudbypass.get('https://etherscan.io/accounts/label/lido', {
    cb_apikey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    cb_part: '0',
    cb_proxy: 'http://proxy:port'
})
    .then(function (response) {
        console.log(response.status, response.headers.get("x-cb-status"));
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error.response.data || error.response || error.message);
    });
```

### 查询余额

```js
import cloudbypass from 'cloudbypass-sdk';
// Using Node.js `require()`
// const cloudbypass = require('cloudbypass-sdk');

cloudbypass.getBalance(/* APIKEY */).then(balance => {
    console.log(balance);
}).catch(err => {
    console.log(err);
})
```

### 提取代理

通过`cloudbypass.createProxy(auth: string)`方法可以创建一个`CloudbypassProxy`实例，该实例可提取穿云动态代理IP和时效代理IP。

+ `copy()` 复制代理实例，使原有代理实例不受影响。
+ `setDynamic()` 设置为动态代理。
+ `setExpire(expire: number)` 设置为时效代理，参数为IP过期时间，单位为秒。
+ `setRegion(region: string)` 设置代理IP地区。
+ `clearRegion()` 清除代理的地区。
+ `toString()` 返回代理IP字符串。
+ `format(format_str?: string)` 格式化代理IP，参数为格式化字符串，例如：`username:password@gateway`。
+ `limit(count: number, format_str?: string)` 返回一个代理IP字符串迭代器，参数为提取数量及代理格式化字符串。
+ `loop(count: number, format_str?: string)` 返回一个代理IP字符串循环迭代器，参数为实际数量及代理格式化字符串。

```js
import cloudbypass from 'cloudbypass-sdk';

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
const loop = proxy.copy().setExpire(60 * 10).loop(2);
for (let i = 0; i < 10; i++) {
    console.log(loop.next().value)
}
```

### 关于重定向问题

使用SDK发起请求时，重定向操作会自动处理，无需手动处理。且重定向响应也会消耗积分。

### 关于服务密钥

请访问[穿云控制台](https://console.cloudbypass.com/#/api/account)获取服务密钥。

