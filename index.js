"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
// const config = require('config');

app.set('port', process.env.PORT||8080);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

let fbs = require('./lib/firebase');

app.put('/askCityList', function(req,res){
    fbs.askCityList(req.body, responce => {
        if(responce) res.send(responce);
        else res.status(400).send('Bad Request');
    })
});

app.listen(app.get('port'), () => console.log(`Application starts on port ${app.get('port')}`));