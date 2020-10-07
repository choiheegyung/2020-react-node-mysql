let http = require('http');
let fs = require('fs');
let mysql = require('mysql');
const { json } = require('body-parser');

let data = ""
let app = http.createServer(function (request, response) {
    let url = request.url;

    let connection = mysql.createConnection({
        host: 'database-1.cgqvumkhjcv7.ap-northeast-2.rds.amazonaws.com',
        user: 'trend_bird',
        password: 'trend_bird',
        database: 'trend_bird'
    });
    connection.connect();

    if (request.url == '/') {
        /*
        connection.query('SELECT id, pub_date, contents, more_info, image FROM trendbird;', function (error, database) {
            if (error) { console.log(error); }
            data = database
            fs.writeFile('./client/src/store/data.json', JSON.stringify(data), 'utf8', function (err) {
                response.writeHead(200);
                response.end("save");
            })
        });
        */
       return response.writeHead(200);
    } else if (request.url == '/favicon.ico') {
        return response.writeHead(404);
    } else if (request.url == '/trends') {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

        //request.on('', function(){
         //   param
        //});

        let query = 'SELECT id, pub_date, contents, moreinfo, image_path FROM trends;';
        
        if (params.term && params.startdate) 
            query += ' WHERE contents LIKE "%' + params.term + '%" AND date(pub_date) >= "' + params.startdate + '" AND date(pub_date) <= "' + params.enddate + '";';
        else if (params.term) 
            query += ' WHERE contents LIKE "%' + params.term + '%";';
        else if (params.startdate) 
            query += ' WHERE date(pub_date) >= "' + params.startdate + '" AND date(pub_date) <= "' + params.enddate + '"; ';

        connection.query(query, function (error, data) {
            if (error) { console.log(error); }
            // data = database;
            response.writeHead(200);
            response.end(JSON.stringify(data));
            //fs.writeFile('./client/src/store/data.json', JSON.stringify(data), 'utf8', function (err) {
                
            //})
        });
    }
});

app.listen(5000);