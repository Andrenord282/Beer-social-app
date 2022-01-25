<template>
    <div class="adress">
        <h2 class="title">Адрес</h2>
        <div class="country">
            <div class="country-item">Страна: {{ this.adress.country }}</div>
            <div class="country-item">Штат: {{ this.adress.state }}</div>
        </div>
        <div class="region">
            <div class="region-item">Город: {{ this.adress.city }}</div>
            <div class="region-item">Индекс: {{ this.adress.zip_code }}</div>
        </div>
        <div class="street">
            <div class="street-item">Улица: {{ this.adress.street_name }}</div>
            <div class="street-item">Адрес: {{ this.adress.street_address }}</div>
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {

        computed: {
        ...mapState({
            adress: state => state.profile.address
        })
    }
}

</script>

<style scoped>

.employment-item:not(:last-child){
    margin-bottom: 10px;
}
</style>