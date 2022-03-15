/*
 * @Author: polarbear
 * @Date: 2022-02-26 14:56:23
 * @LastEditTime: 2022-03-15 23:02:41
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/utils/ProgramUtil.ts
 */

import path from "path";

export default class ProgramUtil {

    /**
     * @description: 模拟线程休眠
     * @param {number} ms
     * @return {*}
     */
    public static sleep(ms: number) {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                resolve(null);
            }, ms);
        });
    }

    /**
     * 判断是否是pkg打包后的程序
     */
    public static isPkg() {
        // 由于打包后会将js合并为单js文件，所以可以根据文件名称判断
        if (path.basename(__filename) === "ProgramUtil.js") {
            return false;
        } else {
            return true;
        }
    }

    /**
     * 获取项目根目录
     * @returns 
     */
    public static getRootPath() {
        if (!ProgramUtil.isPkg()) {
            return path.join(__dirname, "../../../");
        } else {
            return __dirname;
        }

    }

    /**
     * 获取应用根目录，当被打包后该目录为可执行程序所在目录，为打包则是项目根目录
     * @returns 
     */
    public static getAppPath() {
        return process.cwd();
    }

}