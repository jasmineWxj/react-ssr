
import React from 'react'
import Home from '../share/Home'
import { renderToString } from 'react-dom/server'

import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../share/routes"
import { Provider } from "react-redux";
import serialize from 'serialize-javascript';
// 接收来自客户端发送的请求
// 当客户端请求地址为：'/',时，服务器端做出的响应。
export default (req, store) => {
    // renderToString: 返回一个html字符串
    // const content = renderToString(<Home />)

    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={ req.path } > { renderRoutes(routes) }</StaticRouter >
      </Provider>
    );
  const initalState = serialize(JSON.stringify(store.getState()));
    return `
      <html>
        <head><title>react ssr</title></head>
        <body>
          <div id="root">${content}</div>
          <script>window.INITIAL_STATE = ${initalState} </script>
           <script src="bundle.js"></script>
        </body>
      </html>
    `
}

