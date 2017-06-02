"use strict";

let firebase = require('firebase');
const fbconfig = require('../config/fbconfig.json');
firebase.initializeApp(fbconfig);


class Firebase {
    askCityList (req, callback){
        var responce = {};
        var currRef = req.country+"/"+req.state;
        firebase.database().ref(currRef).once("value").then(snapshot=> {
            if(snapshot.val()){
                var currRes = [];
                var currState = snapshot.val();
                for (var county in currState) {
                    var currCounty = currState[county];
                    if(currCounty[req.city]){
                        currCounty[req.city].Country = req.country;
                        currRes.push(currCounty[req.city]);
                    }
                }
                callback(currRes);
            } else callback(snapshot.val());
        });
    }
};

module.exports = new Firebase;