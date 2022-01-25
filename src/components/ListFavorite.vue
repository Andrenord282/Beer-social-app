<template>
    <div class="list-wrapper">
        <div class="list-head">
            <h2 class="title-list-beer">Любимые</h2>
            <div
                class="list-count"
                v-show="this.list.favoriteBeerList.length > 0"
            >
                {{ this.FAVORITE_COUNT }}
            </div>
        </div>
        <list-empty-unit v-if="this.list.favoriteBeerList.length == 0" />
        <ul v-else class="list-beer">
            <li
                class="list-beer-item"
                v-for="listItem in this.list.favoriteBeerList"
                :key="listItem.uid"
            >
                <item-list-favorite-unit
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
import ItemListFavoriteUnit from "@/UI/ItemListFavoriteUnit.vue";

export default {
    components: {
        ListEmptyUnit,
        ItemListFavoriteUnit,
    },

    methods: {},

    computed: {
        ...mapState(["list"]),
        ...mapGetters(["FAVORITE_COUNT"]),
    },
};
</script>

<style scoped>

.list-wrapper {
    overflow: auto;
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