<template>
    <div class="list-wrapper">
        <div class="list-head">
            <h2 class="title-list-beer">Попробовал</h2>
            <div class="list-count" v-show="this.list.triedBeerList.length > 0">
                {{ this.TRIED_COUNT }}
            </div>
        </div>
        <list-empty-unit v-if="this.list.triedBeerList.length == 0" />
        <ul v-else class="list-beer">
            <li
                class="list-beer-item"
                v-for="listItem in this.list.triedBeerList"
                :key="listItem.uid"
            >
                <item-list-tried-unit
                    :setItemList="listItem"
                    :idCard="listItem.uid"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ListEmptyUnit from "@/UI/ListEmptyUnit.vue";
import ItemListTriedUnit from "@/UI/ItemListTriedUnit.vue";

export default {
    components: {
        ListEmptyUnit,
        ItemListTriedUnit,
    },

    methods: {},

    computed: {
        ...mapState(["list"]),
        ...mapGetters(["TRIED_COUNT"]),
    },
};
</script>

<style scoped>

.list-wrapper {
    overflow: auto;
    margin-bottom: 20px;
}

.list-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
}

.list-count{
    font-size: 20px;
    font-weight: 900;
}

@media (max-width: 1199px) {
    .list-beer {
        max-height: 250px;
    }
}
</style>