/*
 * @Author: polarbear
 * @Date: 2022-02-26 16:36:05
 * @LastEditTime: 2022-02-28 02:54:56
 * @LastEditors: polarbear
 * @Description: 此目录存放路由
 * @FilePath: /NodeTSDevTemp/src/app/router/Api.ts
 */

import express from "express";

export default class Api {

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
