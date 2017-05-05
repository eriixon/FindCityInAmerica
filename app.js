var app = new Vue({
  el: '#main',
  data: {
    countryList: ["USA"],//,"Canada","Mexico"],
    requestList: [],
    request:{},
    rqCountry:'', 
    rqState:'', 
    rqCity:''
  },
 methods: {
    addRequest: function() {
        request = {"country":this.rqCountry,"state":this.rqState,"city":this.rqCity};
        if (request) {
            console.log("HEY");
            this.requestList.push(request);
            this.request = "";
        }
        this.rqCountry='';
        this.rqState='';
        this.rqCity='';
    }
  }
});