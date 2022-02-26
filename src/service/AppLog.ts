/*
 * @Author: polarbear
 * @Date: 2022-02-26 17:03:08
 * @LastEditTime: 2022-02-26 21:18:07
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
    public static info(content: string, categorie?: string) {
        Log4js.getLogger(categorie).info(content);
    }

    /**
    * 打印警告日志
    * @param content 
    * @param categorie 
    */
    public static warn(content: string, categorie?: string) {
        Log4js.getLogger(categorie).warn(content);
    }

    /**
    * 打印错误日志
    * @param content 
    * @param categorie 
    */
    public static error(content: string, categorie?: string) {
        Log4js.getLogger(categorie).error(content);
    }

    /**
    * 打印致命错误日志
    * @param content 
    * @param categorie 
    */
    public static fatal(content: string, categorie?: string) {
        Log4js.getLogger(categorie).fatal(content);
    }

}