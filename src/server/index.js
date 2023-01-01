// 服务端入口文件

import app from './http'
import renderer from './render';

// 接收来自客户端发送的请求
// 当客户端请求地址为：'/',时，服务器端做出的响应。

app.get('*', (req, res) => {
    console.log(renderer(req));
    res.send(renderer(req))
})
