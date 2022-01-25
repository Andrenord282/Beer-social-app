<template>
    <div class="navigation-wrapper">
        <btn-unit class="navigation-btn btn-default" @click="this.GET_PREV_CARD"
            >Назад</btn-unit
        >
        <btn-unit
            class="navigation-btn btn-default"
            @click="this.ADD_SAMPLE_LIST_GET_NEW_CARD"
            >Добавить</btn-unit
        >
        <btn-unit
            class="navigation-btn btn-default"
            @click="this.GET_BEER_API_CARD"
            >Вперед</btn-unit
        >
    </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import BtnUnit from "@/UI/BtnUnit.vue";

export default {
    components: {
        BtnUnit,
    },

    methods: {
        ...mapActions(["ADD_SAMPLE_LIST_GET_NEW_CARD"]),
        ...mapMutations(["GET_PREV_CARD"]),
    },
};
</script>

<style scoped>
.navigation-wrapper {
    display: flex;
    justify-content: space-between;
}

.navigation-btn {
}
</style>