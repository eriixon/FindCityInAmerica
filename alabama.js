var alabama = [
{"County":"Autauga","City":"Autaugaville town"},
{"County":"Autauga","City":"Billingsley town"},
{"County":"Autauga","City":"Millbrook city"},
{"County":"Autauga","City":"Prattville city"},
{"County":"Baldwin","City":"Bay Minette city"},
{"County":"Baldwin","City":"Daphne city"},
{"County":"Baldwin","City":"Elberta town"},
{"County":"Baldwin","City":"Fairhope city"},
{"County":"Baldwin","City":"Foley city"},
{"County":"Baldwin","City":"Gulf Shores city"},
{"County":"Baldwin","City":"Loxley town"},
{"County":"Baldwin","City":"Magnolia Springs town"},
{"County":"Baldwin","City":"Orange Beach city"},
{"County":"Baldwin","City":"Perdido Beach town"},
{"County":"Baldwin","City":"Robertsdale city"},
{"County":"Baldwin","City":"Silverhill town"},
{"County":"Baldwin","City":"Spanish Fort city"},
{"County":"Baldwin","City":"Summerdale town"},
{"County":"Barbour","City":"Bakerhill town"},
{"County":"Barbour","City":"Blue Springs town"},
{"County":"Barbour","City":"Clayton town"},
{"County":"Barbour","City":"Clio city"},
{"County":"Barbour","City":"Eufaula city"},
{"County":"Barbour","City":"Louisville town"}];

var newAL = [];// {country: string, cities: array}
var m = false;
for (var i = 0; i < alabama.length; i++) {
    var e = alabama[i];
    if (i == 0) { 
        var cities = [e.City];
        newAL.push({County: e.County, Cities: cities});
    } else {
        for (var y = 0; y < newAL.length; y++) {
            var z = newAL[y];
            if( z.County == e.County) {
                var x = z.Cities;
                x.push(e.City);
                z.Cities = x;
                m = true;
            }
            // newAL = z;
        }
        if (m) {
           var newCities = [e.City];
           newAL.push({County: e.County, Cities:newCities});
        }            
    }
    
};