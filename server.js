'use strict'

let express = require('express');
const mysql = require('mysql');

let app = express();

app.use( express.static( __dirname + '/' ) );

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2312paska',
    database : 'clothing'
});
  
connection.connect();

app.get('/warehouse', function(req, res){
    connection.query('SELECT * FROM warehouse', function(err, results){
        if (err) {
            console.log(err)
        }
        res.send({
            "result": "ok",
            "data": results
        });
    });
});

app.get('/price-check?', function(req, res){
    let sql = 'SELECT * FROM warehouse WHERE item_name = "?" AND size = "?" AND in_store = ?';    

    connection.query(sql, req.query.item, req.query.size, req.query.quantity, function(err, results){
        if (err) {
                console.log(err)
            }
        console.log(req.query.query.item)
        console.log(req.query.size)
        console.log(req.query.quantity)
        res.send({
            "result": "ok",
            "data": results
        });
    });
});

app.listen(3000, () => console.log('server running on "http://localhost:3000"'));