/*
 * @Author: polarbear
 * @Date: 2022-02-26 14:56:23
 * @LastEditTime: 2022-02-26 15:40:55
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/utils/ProgramUtil.ts
 */

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

}