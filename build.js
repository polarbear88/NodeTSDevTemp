/*
 * @Author: polarbear
 * @Date: 2022-02-26 22:14:19
 * @LastEditTime: 2022-02-27 01:42:08
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/build.js
 */
require("bytenode");
// 这样做可以防止pkg将./index-en.jsc拿去编译字节码
const name = "./index-en.jsc";
require(name);