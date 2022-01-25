<template>
    <div class="list-beer">
        <list-sample class="lists-beer-item"/>
        <list-tried class="lists-beer-item"/>
        <list-favorite class="lists-beer-item"/>
    </div>
</template>

<script>

import ListSample from '@/components/ListSample.vue'
import ListTried from '@/components/ListTried.vue'
import ListFavorite from '@/components/ListFavorite.vue'

export default {

    components: {
        ListSample,
        ListTried,
        ListFavorite
    },
   
}
</script>

<style scoped>
.list-beer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 30px 5px;
    text-align: center;
}

.lists-beer-item {
    height: 33.3333%;
}


@media (max-width: 1199px) {
    .lists-beer-item {
        max-height: 250px;
    }
}
</style>