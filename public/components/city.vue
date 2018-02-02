<template>
    <li>
        <div class="col-md-3 cityResponce">
            <span class="x-delete btn-del" @click="$emit('remove', city.id)"><i class="fas fa-times"></i></span>
            <div class="col-md-4">
                <p>Country</p>
                <p>State</p>
                <p v-if="city.County">County</p>
                <p v-if="city.Municipality">Municipality</p>
                <p>City</p>
            </div>
            <div class="col-md-8">
                <p>{{city.Country}}</p>
                <p>{city.State}}</p>
                <p v-if="city.County">{{city.County}}</p>
                <p v-if="city.Municipality">{{city.Municipality}}</p>
                <p>{{city.City}}</p>
            </div>
        </div>
    </li>
</template>

<script>
    export default {
        props: {
            city: {
            type: Object,
            required: true
            }
        }
    };
</script>