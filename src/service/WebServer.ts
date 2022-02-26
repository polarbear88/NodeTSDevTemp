/*
 * @Author: polarbear
 * @Date: 2022-02-26 16:30:24
 * @LastEditTime: 2022-02-26 17:59:30
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/service/WebServer.ts
 */
import express from "express";
import path from "path";
import Router from "../app/router/Router";
import AppLog from "./AppLog";

export default class WebServer {

    // express实例
    public static expressApp: express.Express;

    public static startServer(port = 8080) {
        WebServer.expressApp = express();
        // 应用路由
        Router.applyAllRouter(WebServer.expressApp);
        // 应用静态文件
        WebServer.expressApp.use(express.static(path.join(__dirname, "../../src/public")));
        // 开始监听
        WebServer.expressApp.listen(port, "0.0.0.0", () => {
            AppLog.info("WebServer runing port: " + port + "!");
        });
    }
}