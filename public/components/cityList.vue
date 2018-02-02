<template>
	<div>
		<ul v-if="cities.length">
			<CityList v-for="city in cities" :key="city.id" :city="city" @remove="removeCity" />
		</ul>
		<p v-else> Nothing left in the list. Try again...</p>
	</div>
</template>

<script>
    import CityList from './city.vue'
    export default {
        components: { CityList },
        data () {
            return {
                cities: [ ]
            }
        },
        methods: {
            removeCity (idToRemove) {
                this.cities = this.cities.filter(city => { return city.id !== idToRemove });
            }
        }
    }
</script>