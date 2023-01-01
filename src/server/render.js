
import React from 'react'
import Home from '../share/Home'
import { renderToString } from 'react-dom/server'

import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../share/routes"
// 接收来自客户端发送的请求
// 当客户端请求地址为：'/',时，服务器端做出的响应。
export default (req,) => {
    // renderToString: 返回一个html字符串
    // const content = renderToString(<Home />)

    const content = renderToString(
        <StaticRouter location={ req.path } > { renderRoutes(routes) }</StaticRouter >
    );
    return `
      <html>
        <head><title>react ssr</title></head>
        <body>
          <div id="root">${content}</div>
           <script src="bundle.js"></script>
        </body>
      </html>
    `
}

