Vue.component('city', {
    props: ['city'],
    template: `
    <div>
        <div class="col-sm-6 col-md-4" style="text-align: center;">
            <div class="thumbnail">
                <iframe width="100%" height="250" frameborder="0" style="border:0"
                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB-V9QUKxnbFAnWr_9UZP6la0neIBYteZ4&q=Boise+Idaho" allowfullscreen>
                </iframe>
                <span class="x-delete btn-del" @click="$emit('remove', city.id)"><i class="fas fa-times"></i></span>
                <div class="caption">
                    <h3>{{city.City}}</h3>
                    <p v-if="city.County">County: {{city.County}}</p>
                    <p v-if="city.Municipality">Municipality: {{city.Municipality}}</p>
                    <p>State: {{city.State}}</p>
                    <p>Country: {{city.Country}}</p>
                    <p>
                        <a href="#" class="btn btn-primary" role="button">Wikipedia</a>
                        <a href="#" class="btn btn-default" role="button">City Data</a>
                        <a href="#" class="btn btn-success" role="button">City Population</a>
                    </p>
                </div>
            </div>
        </div>
    </div>`
})