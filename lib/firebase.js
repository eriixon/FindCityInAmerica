"use strict";

let firebase = require('firebase');
const fbconfig = require('../config/fbconfig.json');
firebase.initializeApp(fbconfig);


class Firebase {
    askCityList (req, callback){
        var responce = {};
        var country = req.country;
        var city = req.city;
        firebase.database().ref(country).once("value").then(snapshot=> {
            if(snapshot.val()){
                var data = snapshot.val();
                var currRes = this.USASearch(data, city, country);

                // for (var state in country) {
                //     var currState = country[state];
                //     for( var county in currState){
                //         var currCounty = currState[county];
                //         if(currCounty[req.city]){
                //             var foundPlace = {}
                //             foundPlace = currCounty[req.city];
                //             foundPlace.Country = currentCountry;
                //             currRes.push(foundPlace);
                //         }
                //     }
                // }
                callback(currRes);
            } else callback(snapshot.val());
        });
    }

    USASearch(data, city, country){
        var currRes = [];
        for (var state in data) {
            var currState = data[state];
            for( var county in currState){
                var currCounty = currState[county];
                if(currCounty[city]){
                    var foundPlace = {}
                    foundPlace = currCounty[city];
                    foundPlace.Country = country;
                    currRes.push(foundPlace);
                }
            }
        }
    }
};

module.exports = new Firebase;