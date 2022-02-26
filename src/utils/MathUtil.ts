/*
 * @Author: polarbear
 * @Date: 2022-02-26 15:42:04
 * @LastEditTime: 2022-02-26 15:48:03
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/utils/MathUtil.ts
 */
export default class MathUtil {
    /**
     * 计算平均值
     * @param args 
     */
    public static average(args: Array<number>) {
        let total = 0;
        args.forEach(element => {
            total = total + element;
        });
        return total / args.length;
    }

    /**
     * 判断是否等于（容许差值）
     * @param n 
     * @param n1 
     * @param v 
     */
    public static approxEqual(n: number, n1: number, v = 0) {
        if (v == 0) return n == n1;
        const c = n - n1;
        if (c >= -v && c <= v) return true;
        return false;
    }
}