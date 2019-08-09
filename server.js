//Install express server
const express = require('express');
const path = require('path');

const app = express();

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3500;

server.use(middlewares);
server.use(router);

server.listen(port);

// Serve only the static files form the dist directory
app.use(express.static('./dist/NCU-SMS'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/NCU-SMS/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);