#! /bin/bash

#将typescript编译为js
npm run build

#将js代码打包为单js
ncc build ./dist/App.js -o ./bin/

#将public目录复制
cp -rf ./public ./bin/public

#将单js混淆
javascript-obfuscator ./bin/index.js --output ./bin/index-en.js --string-array-encoding rc4 --compact true

#将混淆的单js使用bytenode编译字节码
bytenode --compile ./bin/index-en.js

#将引导js复制
cp -rf ./bootstrap.js ./bin/bootstrap.js

#使用pkg打包为可执行文件
pkg ./bin/bootstrap.js --out-path ./bin --config pkg.json

echo "************* 打包完成 *************"
