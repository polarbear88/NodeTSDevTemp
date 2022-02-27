/*
 * @Author: polarbear
 * @Date: 2022-02-26 22:14:19
 * @LastEditTime: 2022-02-28 00:38:12
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/bootstrap.js
 */
require("bytenode");
// 这样做可以防止pkg将./index-en.jsc拿去编译字节码
const name = "./index-en.jsc";
require(name);