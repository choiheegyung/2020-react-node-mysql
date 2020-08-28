let http = require('http');
let fs = require('fs');
let mysql = require('mysql');
const { json } = require('body-parser');

let data = ""
let app = http.createServer(function(request, response){
  let url=request.url;

  let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '122512',
    database : 'db'
  });
  connection.connect();; 

  if(request.url == '/'){
    connection.query('SELECT id, contents, pub_date, moreinfo, image FROM trendbird;', function (error, database) {
      if (error) {console.log(error);}
      data = database
      fs.writeFile('./client/src/store/data.json', JSON.stringify(data), 'utf8', function(err){
        response.writeHead(200);
        response.end("save");
      })
    });
  }
  
  if(request.url =='/favicon.ico'){
    return response.writeHead(404);
  }
  response.writeHead(200);
  response.end(JSON.stringify(data));
});

app.listen(5000);