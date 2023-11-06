// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
//
// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
//
// module.exports = app;

// 구구단 출력
// const express = require('express');
// const app = express(); // top-level function. Express application을 생성
// app.set('port', process.env.PORT || 3000); // app.set(name, value), app.get(name)
// app.set('view engine' , 'ejs');
//
// // 미들웨어
// app.use(express.json());
// app.use(express.urlencoded({extended : false}));
//
// app.get('/', (req, res) => { // app.get(path, callback)
//   res.sendFile(__dirname + "/nine.html");
// });
//
// app.post('/' , (req , res) => {
//   console.log('req.body : ' , req.body);
//   res.render('gugu.ejs' , req.body);
// });
//
// app.listen(app.get('port'), () => { // app.listen(port, callback)
//   console.log(app.get('port'), '번 포트에서 대기 중');
// });


// //
// const express = require('express');
// const app = express();
//
// //바디파서 미들웨어
// app.use(express.json());
// app.use(express.urlencoded({extended : false}));
//
// const DB = [];
//
// app.get('/' , (req, res) => {
//     res.json(DB);
// });
//
// app.post('/' , (req, res) => {
//    DB.push(req.body);
//    res.redirect('/');
// });
//
// app.get("/:id" , (req , res) => {
//     const record = DB.find(x => x.id === req.params.id);
//     res.json(record);
// })
//
// app.put("/:id" ,  (req, res) => {
//     const idx = DB.findIndex(x => x.id ===req.params.id);
//     DB[idx] = req.body;
//     res.redirect('/');
// })



// 성적
//바디파서 미들웨어
const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
app.use(express.urlencoded({extended : false}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/grade.html');
})

app.post('/' , (req, res) => {
    res.render("message.ejs" , req.body);
})


// const express = require('express');
// const app = express();
// const path = require('path');
// const session = require('express-session');
//
// app.use(express.json());
// app.use(express.urlencoded({extended : false}));
//
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
//
//
// app.use(session({
//     secret: 'mysecret',
//     resave:false,
//     saveUninitialized : false
// }));
//
// function isLogin(req , res , next)
// {
//     if(req.session.login)
//     {
//         next();
//     }
//     else
//     {
//         next("route");
//     }
// }
// app.get("/" , isLogin,(req , res) => {
//     res.render("welcome" , req.session);
// })
// app.get("/" , (req, res) => {
//     res.sendFile(__dirname + "/login.html");
// })
// app.post("/login" , (req, res) => {
//     req.session.login = req.body.name;
//     req.session.basket = []; // 장바구니
//     res.redirect("/");
// })
//
// app.post('/select' , (req, res) => {
//     req.session.basket.push(req.body.product);
//     res.render("select" , req.body)
// })
//
// app.get('/complete' , (req, res) => {
//     res.render("complete" , req.session);
// })

app.listen(3000 , () => {
    console.log("3000번 포트 에서 대기중");
})
