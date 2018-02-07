Vue.component('cityList', {
    template: `
    <div>
        <div class="row">
            <div v-if="cities.length" class="col-md-10 col-md-offset-1">
                <city v-for="city in cities" :key="city.id" :city="city" @remove="removeCity(city)" />
            </div>        
        </div>
    </div>
  `,
    data: function () {
        return {
            cities : store.state.cityList
        }
    },
    methods:{
        removeCity: function(city) {
            store.deleteCity(city)
        }
    }
})