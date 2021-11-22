const url = require("url");
const addr = 'http://localhost:3000/default.html?year=2021&month=Oct';

var qString = url.parse(addr, true);

console.log(qString.host);
console.log(qString.pathname);
console.log(qString.search);

var data = qString.query;
console.log(data); //JSON 형식의 object이다
console.log(data.month);