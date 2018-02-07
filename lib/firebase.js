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
                var cities = [];
                if(country == "USA") cities = this.USASearch(data, city, country);
                if(country == "Canada") cities = this.CanadaSearch(data, city, country);
                if(country == "Mexico") cities = this.MexicoSearch(data, city, country);
                callback(this.AddLinks(cities));
            } else callback(snapshot.val());
        });
    }

    USASearch(data, city, country){
        var cityList = [];
        for (var s in data) {
            var state = data[s];
            for(var c in state){
                var county = state[c];
                if(county[city]){
                    var place = {City: county[city].Name, County: county[city].County, State: county[city].State, Country: country};
                    cityList.push(place);
                }
            }
        }
        return cityList;
    }

    MexicoSearch(data, city, country){
        var cityList = [];
        for (var state in data) {
            var currState = data[state];
            for( var county in currState){
                var municipality = currState[county];
                if(municipality[city]){
                    var place = {City:municipality[city].Name, Municipality:municipality[city].Municipality, State: municipality[city].State, Country:country};
                    cityList.push(place);
                }
            }
        }
        return cityList;
    }

    CanadaSearch(data, city, country){
        var cityList = [];
        for (var s in data) {
            var state = data[s];
            if(state[city]) cityList.push({City: state[city].Name, State :state[city].State, Country : country});
        }
        return cityList;
    }

    AddLinks(cities){
        cities.forEach(city => {
            var link = '';
            for (var p in city){
                link = (link == '')? city[p]: `${link}+${city[p]}`;
            }
            city.mapLink = `https://www.google.com/maps/embed/v1/place?key=AIzaSyB-V9QUKxnbFAnWr_9UZP6la0neIBYteZ4&q=${link}`;
            city.wiki = `https://en.wikipedia.org/wiki/${city.City},_${city.State}`;
            city.citydata = `http://www.city-data.com/city/${city.City}-${city.State}.html`;
        });
        return cities;
    }
}

module.exports = new Firebase;