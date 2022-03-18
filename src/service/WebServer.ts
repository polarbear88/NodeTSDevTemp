/*
 * @Author: polarbear
 * @Date: 2022-02-26 16:30:24
 * @LastEditTime: 2022-03-18 16:35:18
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/service/WebServer.ts
 */
import express, { Request, Response } from "express";
import path from "path";
import Middleware from "../app/middleware/Middleware";
import Router from "../app/router/Router";
import ProgramUtil from "../utils/ProgramUtil";
import AppLog from "./AppLog";
require("express-async-errors"); // 修补express无法捕获异步异常的问题

export default class WebServer {

    // express实例
    public static expressApp: express.Express;

    public static startServer(port = 8080) {
        WebServer.expressApp = express();
        // 应用body解析器
        WebServer.expressApp.use(express.json());
        // 应用中间件
        Middleware.applyAllMiddle(WebServer.expressApp);
        // 应用路由
        Router.applyAllRouter(WebServer.expressApp);
        // 应用静态文件 
        AppLog.info(path.join(ProgramUtil.getRootPath(), "/public"));
        WebServer.expressApp.use(express.static(path.join(ProgramUtil.getRootPath(), "/public")));
        // 全局处理异常
        WebServer.expressApp.use((err: any, req: Request, res: Response, next: () => void) => {
            AppLog.errorEx(err, `URL: ${req.url}`);
            return res.send({
                code: -1,
                msg: "internal error"
            });
        });
        // 开始监听
        WebServer.expressApp.listen(port, "0.0.0.0", () => {
            AppLog.info("WebServer runing port: " + port + "!");
        });
    }
}