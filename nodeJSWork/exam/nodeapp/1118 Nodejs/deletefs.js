const fs = require("fs");

console.log("delete a delete.txt file!!");
fs.unlink('delete.txt', (err) => {
    if(err) return console.error(err);

    console.log("delete.txt file deleted success!!!");
});