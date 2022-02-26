/*
 * @Author: polarbear
 * @Date: 2022-02-26 15:00:53
 * @LastEditTime: 2022-02-26 15:04:02
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
    public static formatDateTime(format = "yyyy-MM-DD HH:mm:ss", date?: Date) {
        if (!date) {
            date = new Date();
        }
        return moment(date).format(format);
    }
}