import path from "path";

function getFilename() {
    const fname = path.basename(__filename);
    if (fname === "log.js") {
        return path.join(__dirname, "../../logs/") + "log.log";
    }
    return path.join(__dirname, "/logs/") + "log.log";
}

function getAppenders() {
    const r = ["consoleout"];
    // 如果在pkg打包的环境下则不输出文件日志
    if (__dirname.indexOf("snapshot") == -1) {
        r.push("fileout");
    }
    return r;
}

export default {
    "appenders": {
        "fileout": {
            "type": "file",
            "filename": getFilename(),
            "compress": false,
            "maxLogSize": 5242880
        },
        "consoleout": {
            "type": "console"
        }
    },
    "categories": {
        "default": {
            "appenders": getAppenders(),
            "level": "info"
        }
    }
};