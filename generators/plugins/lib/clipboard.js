const clipboardy = require('clipboardy');

const readFromClipboard = function() {
    return clipboardy.readSync();
};

const writeToClipboard = function(value) {
    clipboardy.writeSync(value);
};

module.exports = {
    readFromClipboard,
    writeToClipboard
};
