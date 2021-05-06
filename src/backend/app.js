import express from 'express';
import { database } from './dataLayer/database.js'
import { create } from './dataLayer/entities/author.js'

let app = express();

declareEndpoints();
startServer(8080);

function startServer(port) {
   let server = app.listen(port, function () {
      var host = server.address().address
      var port = server.address().port
      console.log("Example app listening at http://%s:%s", host, port)
   });
}

database.load();

//let authorTable = database.getTable("author");
//authorTable.insert(create("Martin", "Vesely"));
//authorTable.insert(create("Hladovec", "Obecny"));

database.save();

console.log(database);
//console.log(authorTable);

function declareEndpoints() {
   app.get('/helloworld', function (req, res) {
      res.end('Hello World!');
   });
}