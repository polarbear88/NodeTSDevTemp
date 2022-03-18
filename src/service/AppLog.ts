/*
 * @Author: polarbear
 * @Date: 2022-02-26 17:03:08
 * @LastEditTime: 2022-03-18 16:38:09
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/service/AppLog.ts
 */

import Log4js from "log4js";
import logConfig from "../config/log";

export default class AppLog {

    static {
        Log4js.configure(logConfig);
    }

    /**
     * 打印信息日志
     * @param content 
     * @param categorie 
     */
    public static info(content: any, categorie?: string) {
        Log4js.getLogger(categorie).info(content);
    }

    /**
    * 打印警告日志
    * @param content 
    * @param categorie 
    */
    public static warn(content: any, categorie?: string) {
        Log4js.getLogger(categorie).warn(content);
    }

    /**
    * 打印错误日志
    * @param content 
    * @param categorie 
    */
    public static error(content: any, categorie?: string) {
        Log4js.getLogger(categorie).error(content);
    }

    /**
    * 打印致命错误日志
    * @param content 
    * @param categorie 
    */
    public static fatal(content: any, categorie?: string) {
        Log4js.getLogger(categorie).fatal(content);
    }

    public static errorEx(error: any, content?: any, categorie?: string) {
        let cn = content;
        if (cn) {
            cn += "\n";
        } else {
            cn = "";
        }
        cn += `name: ${error.name} message: ${error.message}
        stack: ${error.stack}`;
        AppLog.error(cn, categorie);
    }

}