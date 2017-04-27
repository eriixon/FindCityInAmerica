var app = new Vue({
  el: '#main',
  data: {
    countryList: ["USA","Canada","Mexico"],
    listCon: [],
    ask:{}
  },
  methods:{
      onFormSubmit: function(){
        var newAsk = this.ask;
        this.listCon.push(newAsk);
      }
  }
})