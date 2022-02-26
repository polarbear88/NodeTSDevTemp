/*
 * @Author: polarbear
 * @Date: 2022-02-26 14:57:39
 * @LastEditTime: 2022-02-26 15:44:11
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
}