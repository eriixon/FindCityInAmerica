var usa=[];
var usaRow = [allStates];

// usaRow.forEach(state => {ConvertV3(state)});
// usa.forEach(state => CleanData(state));
// uploadCities(usa);

console.log("SUCCESS")

//*** CONVERTER ROW DATA
function ConvertV3 (currState) {
    var state, county, newState = [];
    currState.forEach(function(element) {
             if(element.Name.search("State")>0) state = element.Name.replace(/State/,"").trim();
        else if(element.Name.search("County")>0) county = element.Name.replace(/county/i,'').trim()
        else newState.push({State:state, County:county, City:element.Name.trim()});
    }, this);
    usa.push(newState);
}

//*** CLEAN USA LIST */
function CleanData (state){
    usa.forEach(function(state) { 
        for (var i = 0; i < state.length; i++) {
            state[i].State = state[i].State.trim();
            state[i].County = state[i].County.replace(/county/i,'').trim();
            state[i].City = state[i].City.replace(/town/,'').replace(/city/,'').replace(/village/,'').replace(/borough/,'').replace(/St. /,'Saint ').replace(/(pt.)/,'').trim();
        }
    }, this);
}

// UPLOAD DATA TO FIREBASE DATABASE 
function uploadCities (country) {
  country.forEach(function(currState) {
    currState.forEach(function(e) {
//TODO: update the function for different countries, not only USA
      var eLink = fcdb.ref("USA/"+ e.State+"/"+e.County);
      eLink.child(e.City).set({
          Name: e.City,
          County: e.County,
          State: e.State
      });
    }, this);
  }, this);
}