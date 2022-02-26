import path from "path";

function getFilename() {
    const fname = path.basename(__filename);
    if (fname === "log.js") {
        return path.join(__dirname, "../../logs/") + "log.log";
    }
    return path.join(__dirname, "/logs/") + "log.log";
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
            "appenders": [
                "fileout",
                "consoleout"
            ],
            "level": "info"
        }
    }
};