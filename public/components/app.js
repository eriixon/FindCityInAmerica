var store = {
  state: {
    cityList: [],
  },
  addCity: function (city) {
    this.state.cityList.push(city)
  },
  removeTodo: function (todo) {
    this.todos.splice(this.todos.indexOf(todo), 1)
  },
  deleteCity: function (city){
    this.state.cityList.splice(this.state.cityList.indexOf(city), 1)
  }
}

var app = new Vue({ el: '#main' });