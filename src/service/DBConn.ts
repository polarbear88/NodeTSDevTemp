/*
 * @Author: polarbear
 * @Date: 2022-02-26 16:10:02
 * @LastEditTime: 2022-02-26 16:13:43
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/DBConn.ts
 */

import { Connection } from "typeorm";

export default class DBConn {

    private static conn: Connection | undefined;

    /**
     * 设置数据库连接
     * @param conn 
     */
    public static setConn(conn: Connection) {
        DBConn.conn = conn;
    }

    /**
     * 获取数据库连接
     * @returns 
     */
    public static getConn() {
        if (!DBConn.conn) {
            throw new Error("DataBase not connect");
        }
        return this.conn;
    }

}