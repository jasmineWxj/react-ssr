// 客户端代码入口文件

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "../share/routes";

import { Provider } from "react-redux";
import store from "./sreateStore";

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
    ,
    document.getElementById("root")
);

