import express from 'express';
import { declareEndpoints } from './endpoints.js';
import { seedDataAsync } from './seed.js';
import cors from 'cors'

//await database.loadAsync();
await seedDataAsync();

let app = express();
var corsOptions = {
   origin: 'http://localhost:3000',
}
app.use(cors(corsOptions));
app.use(express.json()) // for parsing application/json

declareEndpoints(app);
startServer(8080);

function startServer(port) {
   let server = app.listen(port, function () {
      var host = server.address().address
      var port = server.address().port
      console.log("Server listening at http://%s:%s", host, port)
   });
}
