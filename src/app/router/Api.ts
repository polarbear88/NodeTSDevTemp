/*
 * @Author: polarbear
 * @Date: 2022-02-26 16:36:05
 * @LastEditTime: 2022-02-26 18:01:02
 * @LastEditors: polarbear
 * @Description: 此目录存放路由
 * @FilePath: /NodeTSDevTemp/src/app/router/Api.ts
 */

import express from "express";

export default class ApiRouter {

    private router = express.Router();

    public getRouter() {
        this.addRouter();
        return this.router;
    }

    private addRouter() {
        this.router.get("/hello", async (req, res) => {
            res.send("<h1>NodeTSDevTemp API</h1>");
        });
    }

}
