<template>
    <div class="employment">
        <h2 class="title">Место работы</h2>
        <div class="employment-item profession">Должность: {{ this.employment.title }}</div>
        <div class="employment-item skill">Навык: {{ this.employment.key_skill }}</div>
    </div>
</template>

<script>

import { mapState} from 'vuex'

export default {

    computed: {
        ...mapState({
            employment: state => state.profile.employment
        })
    },

}

</script>

<style scoped>

.employment-item:not(:last-child){
    margin-bottom: 10px;
}

</style>