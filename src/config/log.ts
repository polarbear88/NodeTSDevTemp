import path from "path";
import ProgramUtil from "../utils/ProgramUtil";

export default {
    "appenders": {
        "fileout": {
            "type": "file",
            "filename": path.join(ProgramUtil.getAppPath(), "/logs/log.log"),
            "compress": false,
            "maxLogSize": 5242880
        },
        "consoleout": {
            "type": "console"
        }
    },
    "categories": {
        "default": {
            "appenders": ["consoleout", "fileout"],
            "level": "info"
        }
    }
};