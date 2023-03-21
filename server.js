// import
const express = require('express');

// create server
const server = express();

// middleware
server.use(express.json());
server.set('view engine', 'ejs');

// start server
server.listen(80);
console.log('Listening for requests on port', 80);

// routes
server.get('/', (req, res) => res.render('main'));

// 404
server.use((req, res) => res.status(404).render('404'));