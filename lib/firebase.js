"use strict";

let firebase = require('firebase');
const fbconfig = require('../config/fbconfig.json');
firebase.initializeApp(fbconfig);


class Firebase {
    askCityList (req, callback){
        var responce = {};
        var currRef = req.country;
        firebase.database().ref(currRef).once("value").then(snapshot=> {
            if(snapshot.val()){
                var currRes = [];
                var country = snapshot.val();
                for (var state in country) {
                    var currState = country[state];
                    for( var county in currState){
                        var currCounty = currState[county];
                        if(currCounty[req.city]){
                            var foundPlace = {}
                            foundPlace = currCounty[req.city];
                            foundPlace.Country = req.country;
                            currRes.push(foundPlace);
                        }
                    }
                }
                callback(currRes);
            } else callback(snapshot.val());
        });
    }
};

module.exports = new Firebase;