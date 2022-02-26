/*
 * @Author: polarbear
 * @Date: 2022-02-26 14:56:13
 * @LastEditTime: 2022-02-26 15:46:54
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/utils/NumberUtil.ts
 */
export default class NumberUtil {
    /**
     * 忽略小数点后
     * @param n 
     * @param len 
     * @returns 
     */
    public static toFixed(n: number, len = 2): number {
        return parseFloat(n.toFixed(len));
    }
}