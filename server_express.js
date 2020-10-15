const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const port = process.env.port || 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'database-1.cgqvumkhjcv7.ap-northeast-2.rds.amazonaws.com',
  user: 'trend_bird',
  password: 'trend_bird',
  database: 'trend_bird'
});

let params = app.params
console.log(params)

let query = 'SELECT id, contents, pub_date, more_info, image FROM insight'

if (params.term && params.startdate) {
    query += ' AND contents LIKE "%' + params.term + '%" AND date(pub_date) >= "' + params.startdate + '" AND date(pub_date) <= "' + params.enddate + '";';
} else if (params.term) {
    query += ` AND contents LIKE CONCAT('%', '${params.term}', '%')`;
} else if (params.startdate) {
    query += ' AND date(pub_date) >= "' + params.startdate + '" AND date(pub_date) <= "' + params.enddate + '"; ';
}

app.get('/trends', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

    connection.query(query, (error, data) => {
        if (error) throw error;
        res.send(data);
    });
});

app.listen(port, () => console.log('listening on port '+ port));