const fs = require("fs");
var buf = new Buffer.alloc(1024);

console.log("Open existing file!!!");
fs.open('input.txt', 'r+', function(err, fd) {
    if(err) return console.error(err);

    console.log("File open success!!!");

    console.log("Reading file!!!");

    fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
        if(err) return console.error(err);

        console.log("Read file success");

        if(bytes > 0) console.log(buf.slice(0, bytes).toString());
        //버퍼가 쓰레기 값이 들어가 있을수있기때문에 읽은 bytes만큼만 출력
    });
});