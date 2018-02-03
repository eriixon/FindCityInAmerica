"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const config = require('config');

app.set('port', process.env.PORT||8080);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

let fbs = require('./lib/firebase');

app.put('/askCityList', function(req,res){
    fbs.askCityList(req.body, responce => {
        if(responce) {
            if(responce.length !=0) res.send(responce);
            else res.status(400).send("Sorry, we can not find this city");
        } else res.status(400).send('Server has no data');
    })
});

app.listen(app.get('port'), () => console.log(`Application starts on port ${app.get('port')}`));