let http = require('http');
let url = require('url');
let mysql = require('mysql');

let app = http.createServer(function (request, response) {
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
    } else if (request.url.startsWith('/trends')) {
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Headers", "X-Requested-With");

        const params = url.parse(request.url, true).query;

        let query = 'SELECT id, pub_date, contents, moreinfo, image_path FROM trends';

        if (params.term && params.startdate) {
            query += ' WHERE contents LIKE "%' + params.term + '%" AND date(pub_date) >= "' + params.startdate + '" AND date(pub_date) <= "' + params.enddate + '";';
        } else if (params.term) {
            query += ` WHERE contents LIKE CONCAT('%', '${params.term}', '%')`;
        } else if (params.startdate) {
            query += ' WHERE date(pub_date) >= "' + params.startdate + '" AND date(pub_date) <= "' + params.enddate + '"; ';
        }

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