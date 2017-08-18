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
      var index = this.uuidv4();
      request.id = index;
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
    },
    deleteRequest: function(id){
      this.requestList.splice(id, 1);
    },
    deleteResponse: function(id){
      this.responceList.splice(id, 1);
    },
    uuidv4: function () {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(6))
    }
 }
});