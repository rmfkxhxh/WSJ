var fs = require("fs");

// Asynchronous - Open file
console.log("Open file!!!");
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) return console.error(err);

    console.log("File Opened Success!!!");
});
