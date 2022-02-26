/*
 * @Author: polarbear
 * @Date: 2022-02-26 02:33:37
 * @LastEditTime: 2022-02-26 17:49:03
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/App.ts
 */

// typeorm所需
import "reflect-metadata";
import { createConnection } from "typeorm";
import Main from "./Main";
import DBConn from "./service/DBConn";
import WebServer from "./service/WebServer";

// typeorm连接数据库
async function connectDataBase() {
    const connection = await createConnection();
    DBConn.setConn(connection);
}

// 启动APP
async function startApp(isConnectDataBase = false) {
    if (isConnectDataBase) {
        await connectDataBase();
    }
    WebServer.startServer();
    Main();
}

startApp();