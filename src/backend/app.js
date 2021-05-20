import express from 'express';
import { database } from './dataLayer/database.js'
import * as Author from './dataLayer/entities/author.js'
import { seedData } from './seed.js';

//database.load();
seedData();
console.log(Author.getRecipies(Author.getAll()[1].id))

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

function declareEndpoints() {
   app.get('/helloworld', function (req, res) {
      res.end('Hello World!');
   });

   app.get('/authors/all', function (req, res) {
      res.end(JSON.stringify(Author.getAll()));
   });
}