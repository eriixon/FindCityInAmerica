Vue.component('city', {
    props: ['city'],
    template:
    `<div>
        <div class="col-sm-6 col-md-4" style="text-align: center;">
            <div class="thumbnail">
                <iframe width="100%" height="auto" frameborder="0" style="border:0" :src="city.mapLink" allowfullscreen></iframe>
                <span class="x-delete btn-del" @click="$emit('remove', city.id)"><i class="fas fa-times"></i></span>
                <div class="caption">
                    <h3>{{city.City}}</h3>
                    <p v-if="city.County">County: {{city.County}}</p>
                    <p v-if="city.Municipality">Municipality: {{city.Municipality}}</p>
                    <p>State: {{city.State}}</p>
                    <p>Country: {{city.Country}}</p>
                    <p>
                        <a :href="city.wiki" class="btn btn-default" target="_blank"><img src="../src/wiki.png" alt="Wikipedia"></a>
                        <a :href="city.citydata" class="btn btn-default" target="_blank"><img src="../src/cityData.png" alt="City Data"></a>
                    </p>
                </div>
            </div>
        </div>
    </div>`
})