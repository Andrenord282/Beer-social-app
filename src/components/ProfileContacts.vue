<template>
    <div class="contacts">
        <h2 class="title">Контакты</h2>
        <div class="contacts-item username">Ник: {{ this.profile.username }}</div>
        <div class="contacts-item tel">Телефон: {{ this.profile.phone_number }}</div>
        <div class="contacts-item email">Email: {{ this.profile.email}}</div>
    </div>
</template>

<script>

import { mapState} from 'vuex'

export default {

    computed: {
        ...mapState(["profile"])
    }
}

</script>

<style scoped>

.contacts-item:not(:last-child){
    margin-bottom: 10px;
}

</style>





