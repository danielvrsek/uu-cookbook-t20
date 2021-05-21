import express from 'express';
import { database } from './dataLayer/database.js';
import { declareEndpoints } from './endpoints.js';
import { seedData } from './seed.js';
import cors from 'cors'

database.load();
//seedData();
//database.save();

let app = express();
var corsOptions = {
   origin: 'http://localhost:3000',
}
app.use(cors(corsOptions));

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

declareEndpoints(app);
startServer(8080);

function startServer(port) {
   let server = app.listen(port, function () {
      var host = server.address().address
      var port = server.address().port
      console.log("Example app listening at http://%s:%s", host, port)
   });
}
