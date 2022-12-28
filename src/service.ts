import express from 'express';
import * as http from 'http';

let app = express();
app.use(express.static(__dirname + '/public'));

let server = http.createServer(app);

server.listen(process.env.PORT || 8080);
