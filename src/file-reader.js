const fs = require('fs');
const readline = require('readline');

exports.readFile = function(filePath, onLineCallback, onCloseCallback) {
    const readInterface = readline.createInterface({
        input: fs.createReadStream(filePath),
        output: process.stdout,
        console: false
    });

    readInterface.on('line', onLineCallback);
    readInterface.on('close', onCloseCallback);
};
