/*
 * @Author: polarbear
 * @Date: 2022-02-26 16:42:11
 * @LastEditTime: 2022-02-26 17:47:55
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/app/router/Router.ts
 */

import { Application } from "express";
import ApiRouter from "./Api";

export default class Router {

    /**
     * 应用全部路由
     * @param expressApp 
     */
    public static applyAllRouter(expressApp: Application) {
        expressApp.use("/api", new ApiRouter().getRouter());
    }

}