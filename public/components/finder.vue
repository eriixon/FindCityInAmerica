<template>
    <div class="row" id="spanel">
        <form class="form" @submit.prevent="sendRequest">
            <div class="col-md-2 col-md-offset-1">
                <button class="btn" id="btn-submit"><i class="fas fa-search"></i></button>
            </div>
            <div class="col-md-3">
                <div class="input-group">
                    <span class="input-group-addon">Country</span>
                    <select class="form-control" id="select-country" v-model.trim="rqCountry" required>
                        <option v-for="country in countryList" v-bind:key="country">{{country}}</option>
                    </select>
                </div>
            </div>
            <div class="col-md-3">
                <div class="input-group">
                    <span class="input-group-addon">City</span>
                    <input class="form-control" id="select-city" v-model.trim="rqCity" required>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
  data: function () {      
    return {
        form: new Form({
              rqCountry: '',
              rqCity: ''
            }),
    countryList: ["USA", "Canada", "Mexico"]
    }
  },
  computed: {
    listeners () {
      return {
        // Pass all component listeners directly to input
        ...this.$listeners,
        // Override input listener to work with v-model
        input: event => this.$emit('input', event.target.value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables.scss';

.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid $vue-blue;
}
</style>