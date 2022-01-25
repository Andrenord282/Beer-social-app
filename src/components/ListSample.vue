<template>
    <div class="list-wrapper">
        <div class="list-head">
            <h2 class="title-list-beer">Нужно попробовать</h2>
            <div
                class="list-count"
                v-show="this.list.sampleBeerList.length > 0"
            >
                {{ this.SAMPLE_COUNT }}
            </div>
        </div>
        <list-empty-unit v-if="this.list.sampleBeerList.length == 0" />
        <ul v-else class="list-beer">
            <li
                class="list-beer-item"
                v-for="listItem in this.list.sampleBeerList"
                :key="listItem.uid + 1"
            >
                <item-list-sample-unit
                    :setItemList="listItem"
                    :key="listItem.uid + 1"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import ListEmptyUnit from "@/UI/ListEmptyUnit.vue";
import ItemListSampleUnit from "@/UI/ItemListSampleUnit.vue";

export default {
    components: {
        ListEmptyUnit,
        ItemListSampleUnit,
    },

    methods: {},

    computed: {
        ...mapState(["list"]),
        ...mapGetters(["SAMPLE_COUNT"]),
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

</style>