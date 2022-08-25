//import express
const express = require('express');
//instantiate express
const app = express();
//import bodyParser
const bodyParser = require('body-parser');

//configur bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//create a route
app.get('/', (req, res) => {
    res.setHeader('content-text', 'text/html');
    res.status(200).send('<h1>Hello World, I\'m WassCodeur</h1>');
    console.log('Server is running on port 3000');
}).listen(3000)
