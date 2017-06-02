'use strict';

/*
fcst - FireBase storage;
fcdb - Firebase Database;
*/


// Request from Front to DB with country/state/city info
function askCityList (req, cb){
  var responce = {};
  var currRef = req.country+"/"+req.state;
  fcdb.ref(currRef).once("value").then(snapshot=> {
    var dbState = snapshot.val();
    // search of the 
    for (var county in dbState) {
      if (dbState.hasOwnProperty(county)) {
        var currCounty = dbState[county];
        if(currCounty[req.city]){
          currCounty[req.city].Country = req.country;
          cb(currCounty[req.city]);
        }
      }
    }
  });
}

//TODO: add more flexable search of citis - indexof()
//TODO: add seach if we know only Country and City
//TODO: splite serach in DB and in the Object