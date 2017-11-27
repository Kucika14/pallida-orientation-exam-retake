'use strict'

let express = require('express')
const mysql = require('mysql');

let app = express();

app.use( express.static( __dirname + '/' ) );

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '2312paska',
    database : 'warehouse'
});
  
connection.connect();

app.get('/warehouse', function(req, res){
    connection.query('SELECT * FROM warehouse', function(error, results){
        res.send({
            "result": "ok",
            "data": results
        })
    })
})