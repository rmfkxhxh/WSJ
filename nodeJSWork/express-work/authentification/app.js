const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();
const session = require("express-session"); //연결되있는 session
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv').config();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(upload.array());
app.use(cookieParser());
app.use(session({
    secure: false,
    name: 'codeil',
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie : {
        maxAge:(1000 * 60 * 100) //cookie의 life cycle
    }
}));

const host ='127.0.0.1';
const port = 3000;

var Users = [];

app.get("/protected_page", (req, res) => {
    res.render("protected_page");
});

app.get('/signup', (req, res) => {
    res.render('signup', {
        message: "User Already Exists! Login or choose another user id" //cookie를 이용하겠다
    });
});

app.post('/signup', (req, res) => {
    if(!req.body.id || !req.body.password) {
        res.status("404");
        res.send("Invalid details!!!");
    }
    else {
        Users.filter((user) => {
            if(user.id === req.body.id) {
                res.render('signup', {
                    message: "User Already Exists! Login or choose another user id" //cookie를 이용하겠다
                })
            }
        });

        let newUser = {id: req.body.id, password: req.body.password};
        Users.push(newUser);
        req.session.user = newUser;
        res.redirect('/protected_page');
    }
});

app.listen(port, host, () => {
    console.log(`Application running at http://${host}:${port}/`)
})
