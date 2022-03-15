/*
 * @Author: polarbear
 * @Date: 2022-02-26 16:30:24
 * @LastEditTime: 2022-03-15 23:04:48
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/service/WebServer.ts
 */
import express from "express";
import path from "path";
import Router from "../app/router/Router";
import ProgramUtil from "../utils/ProgramUtil";
import AppLog from "./AppLog";

export default class WebServer {

    // express实例
    public static expressApp: express.Express;

    public static startServer(port = 8080) {
        WebServer.expressApp = express();
        // 应用路由
        Router.applyAllRouter(WebServer.expressApp);
        // 应用静态文件 
        AppLog.info(path.join(ProgramUtil.getRootPath(), "/public"));
        WebServer.expressApp.use(express.static(path.join(ProgramUtil.getRootPath(), "/public")));
        // 开始监听
        WebServer.expressApp.listen(port, "0.0.0.0", () => {
            AppLog.info("WebServer runing port: " + port + "!");
        });
    }
}