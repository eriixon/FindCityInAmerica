var app = new Vue({
  el: '#main',
  data: {
    countryList: ["USA"],//,"Canada","Mexico"],
    responceList:[],
    requestList:[],
    request:{},
    rqCountry:'', 
    rqState:'', 
    rqCity:''
  },
 methods: {
    addRequest: function() {
      request = {"country":this.rqCountry,"state":this.rqState,"city":this.rqCity};
      if (this) this.requestList.push(request);
      this.request = "";
      this.rqCountry='';
      this.rqState='';
      this.rqCity='';
    },
    sendRequest: function(request){
      askCityList(request, resp => this.responceList.push(resp));
    }
 }
});