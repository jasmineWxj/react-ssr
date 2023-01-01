// 服务端入口文件

import app from './http'
import renderer from './render';
import createStore from './createStore';
import routes from '../share/routes';
import { matchRoutes } from 'react-router-config';

// 接收来自客户端发送的请求
// 当客户端请求地址为：'/',时，服务器端做出的响应。

app.get('*', (req, res) => {
    const store = createStore();
    const promises = matchRoutes(routes, req.path).map(({ route }) => {
        // 如何才能知道数据什么时候获取完成
        if (route.loadData) return route.loadData(store)
    })
    Promise.all(promises).then(() => {
        res.send(renderer(req, store));
    })
})
