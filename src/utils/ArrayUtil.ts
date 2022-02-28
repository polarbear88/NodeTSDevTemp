/*
 * @Author: polarbear
 * @Date: 2022-02-26 14:57:39
 * @LastEditTime: 2022-03-01 03:30:26
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/utils/ArrayUtil.ts
 */
export default class ArrayUtil {
    /**
     * 判断数组内值是否全部相等
     * @param array 
     * @returns 
     */
    public static isAllEqual(array: Array<any>) {
        if (array.length > 0) {
            return !array.some(function (value, index) {
                return value !== array[0];
            });
        } else {
            return true;
        }
    }

    /**
     * 数组累加
     * @param array 
     * @param objKey 
     * @returns 
     */
    public static sum(array: Array<any>, objKey?: string) {
        let total = 0;
        array.forEach(element => {
            if (objKey) {
                total = total + element[objKey];
            } else {
                total = total + element
            }
        });
        return total;
    }
}