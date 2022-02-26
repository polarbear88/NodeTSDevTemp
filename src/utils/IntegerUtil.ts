/*
 * @Author: polarbear
 * @Date: 2022-02-26 15:04:37
 * @LastEditTime: 2022-02-26 15:04:37
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/utils/IntegerUtil.ts
 */

export default class IntegerUtil {

    /**
     * @description: toInt32
     * @param {number} num
     * @return {*}
     */
    public static toInt32(num: number) {
        num = num & 0xffffffff;//消掉高32位
        const p = num >> 31;
        if (p == 1) { //负数
            num = num - 1;
            num = ~num; //取反 会当成64位取反,算出来的数就去了,所以取反之后 要消掉 高32位
            num = num & 0xffffffff;
            return num * -1;
        } else {
            return num;
        }
    }
}