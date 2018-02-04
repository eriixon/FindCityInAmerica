Vue.component('cityList', {
    template: `
    <div>
        <div v-if="cities.length">
            <h3 id="found">... and what we've found for you {{ cities.length }} cities</h3>
            <ul>
                <city v-for="city in cities" :key="city.id" :city="city" @remove="removeCity(city)" />
            </ul>
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