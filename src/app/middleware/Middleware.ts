/*
 * @Author: polarbear
 * @Date: 2022-03-17 17:11:18
 * @LastEditTime: 2022-03-17 17:19:21
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/app/middleware/Middleware.ts
 */

import { Application } from "express";
import GobalMiddleware from "./GobalMiddleware";

export default class Middleware {

    /**
     * 应用全部中间件
     * @param expressApp 
     */
    public static applyAllMiddle(expressApp: Application) {
        expressApp.use("/api/*", GobalMiddleware.middleware);
    }
}