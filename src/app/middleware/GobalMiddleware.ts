/*
 * @Author: polarbear
 * @Date: 2022-03-17 17:06:22
 * @LastEditTime: 2022-03-17 17:19:10
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/app/middleware/GobalMiddleware.ts
 */

import { Request, Response } from "express";

export default class GobalMiddleware {

    public static middleware(req: Request, res: Response, next: () => void) {
        // res.send("<h1>middle</h1>");
        next();
    }

}