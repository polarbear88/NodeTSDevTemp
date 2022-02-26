/*
 * @Author: polarbear
 * @Date: 2022-02-26 18:03:10
 * @LastEditTime: 2022-02-26 18:12:38
 * @LastEditors: polarbear
 * @Description: 
 * @FilePath: /NodeTSDevTemp/src/utils/CryptoUtil.ts
 */

import crypto from "crypto";
const _md5 = require("md5-node");

export default class CryptoUtil {
    /**
     * @description: des_ecb加密
     * @param {Buffer} data
     * @param {string | Buffer} password
     * @param {boolean} autoPadding
     * @return {*}
     */
    public static desECBEncode(data: Buffer, password: string | Buffer, autoPadding = false): Buffer {
        const secretKey = typeof password == "string" ? Buffer.from(password) : password;
        const cipher = crypto.createCipheriv("des-ecb", secretKey, null);
        cipher.setAutoPadding(!!autoPadding);
        const encrypted = cipher.update(data);
        return Buffer.concat([encrypted, cipher.final()]);
    }

    /**
     * @description: des_ecb解密
     * @param {Buffer} data
     * @param {string | Buffer} password
     * @param {boolean} autoPadding
     * @return {*}
     */
    public static desECBDecode(data: Buffer, password: string | Buffer, autoPadding = false): Buffer {
        const secretKey = typeof password == "string" ? Buffer.from(password) : password;
        const cipher = crypto.createDecipheriv("des-ecb", secretKey, null);
        cipher.setAutoPadding(!!autoPadding);
        const encrypted = cipher.update(data);
        return Buffer.concat([encrypted, cipher.final()]);
    }

    /**
    * @description: aes加密
    * @param {Buffer} data
    * @param {string} key
    * @param {*} algorithm
    * @param {*} iv
    * @param {*} autoPadding
    * @return {*}
    */
    public static aesCBCEncode(data: Buffer, key: string | Buffer, algorithm: "aes-128-cbc" | "aes-256-cbc", iv: string | Buffer = "0000000000000000", autoPadding = false): Buffer {
        const secretKey = typeof key == "string" ? Buffer.from(key) : key;
        const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
        cipher.setAutoPadding(!!autoPadding);
        const encrypted = cipher.update(data);
        return Buffer.concat([encrypted, cipher.final()]);
    }

    /**
     * @description: aes解密
     * @param {Buffer} data
     * @param {string} key
     * @param {*} algorithm
     * @param {*} iv
     * @param {*} autoPadding
     * @return {*}
     */
    public static aesCBCDecode(data: Buffer, key: string | Buffer, algorithm: "aes-128-cbc" | "aes-256-cbc", iv: string | Buffer = "0000000000000000", autoPadding = false): Buffer {
        const secretKey = typeof key == "string" ? Buffer.from(key) : key;
        const cipher = crypto.createDecipheriv(algorithm, secretKey, iv);
        cipher.setAutoPadding(!!autoPadding);
        const encrypted = cipher.update(data);
        return Buffer.concat([encrypted, cipher.final()]);
    }

    /**
     * @description: md5加密
     * @param {any} data
     * @return {*}
     */
    public static md5(data: any): string {
        return _md5(data);
    }

    /**
     * hmacSHA256 返回base64
     * @param data 
     * @param key 
     * @returns 
     */
    public static hmacSHA256(data: any, key: string, format: "Buffer" | "Base64" | "Hex" = "Buffer") {
        const buf = Buffer.from(CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(data, key)), "base64");
        if (format == "Base64") return buf.toString("base64");
        if (format == "Hex") return buf.toString("hex");
        return buf;
    }
}