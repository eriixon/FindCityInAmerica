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
      this.$http.put('/askCityList', request).then(
        data => {data.body.forEach(element => this.responceList.push(element), this)},
        error => window.alert(error.statusText))
    }
 }
});