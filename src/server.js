//import express
const express = require('express');

//import path
const path = require('path');

//import
const {popularMovies, movies} = require('./controller/index');

//start server
const server = express();

//public access
server.use(express.static(__dirname + '/view'));
server.use(express.static(__dirname + '/public'));

//hability to use in browser
server.use(express.urlencoded({ extended: true }));

//engine config
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, '/public'));


//use to json request and response
server.use(express.json());

//routers
server.get('/popularMovies', popularMovies);
server.get('/movies', movies);


//views routers
server.get('/index', (req, res) => {
    res.render('view/index');
});

//views routers
server.get('/detalhes', (req, res) => {
    res.render('view/detalhes');
});

//running server
server.listen(8080, ()=>{
    console.log("Server is running!");
});