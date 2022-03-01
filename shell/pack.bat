call npm run build

call ncc build .\dist\src\App.js -o .\bin\

xcopy .\public\ .\bin\public\ /Y/D/E

call javascript-obfuscator .\bin\index.js --output .\bin\index-en.js --string-array-encoding rc4 --compact true

call bytenode --compile .\bin\index-en.js

copy .\bootstrap.js .\bin\bootstrap.js /Y

call pkg .\bin\bootstrap.js --out-path .\bin --config pkg.json