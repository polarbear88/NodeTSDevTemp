/*
 * @Author: polarbear
 * @Date: 2022-02-26 15:00:53
 * @LastEditTime: 2022-02-28 21:12:51
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/utils/DateUtil.ts
 */

import moment from "moment";


export default class DateUtil {

    /**
     * 格式化日期时间
     * @param format 
     * @param date 
     * @returns 
     */
    public static formatDateTime(date?: Date | number, format = "yyyy-MM-DD HH:mm:ss") {
        if (!date) {
            date = new Date();
        }
        if (typeof date == "number") {
            date = new Date(date);
        }
        return moment(date).format(format);
    }
}