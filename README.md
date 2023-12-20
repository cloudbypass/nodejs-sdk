<p align="center">
  <a href="https://cloudbypass.com/" target="_blank" rel="noopener noreferrer" >
    <div align="center">
        <img src="https://github.com/cloudbypass/example/blob/main/assets/img.png?raw=true" alt="Cloudbypass" height="50">
    </div>
  </a>
</p>

## Cloudbypass SDK for Nodejs

### 开始使用

> Cloudbypass Nodejs SDK 依赖于 [Axios](https://axios-http.com/)。

保留axios的所有请求配置，并支持**⚠跨域请求**。

使用`getBalance`方法可以查询当前账户余额。

[![npm version](https://img.shields.io/npm/v/cloudbypass.svg?style=flat-square)](https://www.npmjs.org/package/cloudbypass)
[![CDNJS](https://img.shields.io/cdnjs/v/cloudbypass.svg?style=flat-square)](https://cdnjs.com/libraries/cloudbypass)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/cloudbypass?style=flat-square)](https://bundlephobia.com/package/cloudbypass@latest)

### 安装

#### 包管理器安装

Using npm:

```shell
$ npm install cloudbypass
```

Using yarn:

```shell
$ yarn add cloudbypass
```

Using pnpm:

```shell
$ pnpm add cloudbypass
```

### 使用

安装包后，您可以使用import以下require方法导入库：

```js
// Using Node.js `require()`
const cloudbypass = require('cloudbypass');
```

或者，如果您使用的是ES模块：

```js
// Using ES6 imports
import cloudbypass from 'cloudbypass';
```

### 发起请求

引入`cloudbypass`后，您可以将其当作`axios`使用。

`config`参数支持所有`axios`的请求配置，并支持一下配置：

- `cb_apikey` API密钥;
- `cb_part` 使用V2时设置part参数即可;
- `cb_proxy` 代理地址，支持http和socks5代理;
- `cb_apihost` 定制用户可以使用自己的API服务器;

> 以上参数可使用环境变量`CB_APIKEY`、`CB_PROXY`和`CB_APIHOST`进行配置。

```js
import cloudbypass from 'cloudbypass';
// Using Node.js `require()`
// const cloudbypass = require('cloudbypass'); 

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

穿云API V2适用于需要通过JS质询验证的网站。例如访问https://etherscan.io/accounts/label/lido，请求示例：

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
import cloudbypass from 'cloudbypass';
// Using Node.js `require()`
// const cloudbypass = require('cloudbypass');

cloudbypass.getBalance(/* APIKEY */).then(balance => {
    console.log(balance);
}).catch(err => {
    console.log(err);
})
```

### 关于重定向问题

使用SDK发起请求时，重定向操作会自动处理，无需手动处理。且重定向响应也会消耗积分。

### 关于服务密钥

请访问[穿云控制台](https://console.cloudbypass.com/#/api/account)获取服务密钥。

