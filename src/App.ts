/*
 * @Author: polarbear
 * @Date: 2022-02-26 02:33:37
 * @LastEditTime: 2022-02-26 16:16:12
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/App.ts
 */

// typeorm所需
import "reflect-metadata";
import { createConnection } from "typeorm";
import DBConn from "./DBConn";

async function connectDataBase() {
    const connection = await createConnection();
    DBConn.setConn(connection);
}

async function startApp(isConnectDataBase = false) {
    if (isConnectDataBase) {
        await connectDataBase();
    }
    console.log("Hello world");
}

startApp();