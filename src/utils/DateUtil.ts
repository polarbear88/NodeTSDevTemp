/*
 * @Author: polarbear
 * @Date: 2022-02-26 15:00:53
 * @LastEditTime: 2022-02-28 03:44:07
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
    public static formatDateTime(date?: Date, format = "yyyy-MM-DD HH:mm:ss") {
        if (!date) {
            date = new Date();
        }
        return moment(date).format(format);
    }
}