var express = require('express');
var router = express.Router();
var mysql= require('mysql'); //引用模块
var connection = mysql.createPool({//创建链接
    host     : 'localhost',
    user     : 'root',
    password : 'root'
});
/* GET home page. */
router.get('/list', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');//跨域
    connection.query('SELECT * FROM baby.fuqin2', function(err, rows, fields) {
        res.send(rows);
        console.log(rows)
    });
});
router.post('/data', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');
    var aa=req.body.a;
    console.log(aa);
    connection.query('SELECT * FROM baby.fuqin2 WHERE id='+aa, function(err, rows, fields) {
        res.send(rows)
    })
});

router.post('/item', function(req, res, next) {
    res.header('Access-Control-Allow-Origin','*');//跨域
    connection.query('SELECT * FROM baby.fuqin2', function(err, rows, fields) {
        res.send(rows);
        console.log(rows)
    });
});






module.exports = router;
