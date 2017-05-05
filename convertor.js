var usa = [alabama, alaska];
usa.forEach(function(state) { 

var newlist = [];// {country: string, cities: array}
var m = true;

for (var i = 0; i < state.length; i++) {
    state[i].State = state[i].State.trim();
    state[i].County = state[i].County.replace(/county/i,'').trim();
    state[i].City = state[i].City.replace(/town/,'').replace(/city/,'').trim();
}
for (var i = 0; i < state.length; i++) {
    var e = state[i];
    if (i == 0) newlist.push({State: e.State, County: e.County, Cities: [e.City]}); 
    else {
        m=true;
        for (var y = 0; y < newlist.length; y++) {
            if(newlist[y].State == e.State && newlist[y].County == e.County) {
                m = false;
                var x = newlist[y].Cities;
                x.push(e.City);
                newlist[y].Cities = x;
            }
        }
        if (m) newlist.push({State: e.State, County: e.County, Cities: [e.City]});
}};
}, this);
var usa1 = {USA:usa};
usa1 = JSON.stringify(usa1);
function download(text, name, type) {
    var a = document.createElement("a");
    var file = new Blob([text], {type: type});
    a.href = URL.createObjectURL(file);
    a.download = name;
    a.click();
}
// download(usa, 'usa.txt', 'text/plain');