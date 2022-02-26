/*
 * @Author: polarbear
 * @Date: 2022-02-26 14:56:13
 * @LastEditTime: 2022-02-26 17:56:48
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

    /**
     * 判断是否等于（容许差值）
     * @param n 
     * @param n1 
     * @param v 
     */
    public static approxEqual(n: number, n1: number, v = 0): boolean {
        if (v == 0) return n == n1;
        const c = n - n1;
        if (c >= -v && c <= v) return true;
        return false;
    }
}