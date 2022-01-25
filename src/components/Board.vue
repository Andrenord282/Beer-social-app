<template>
    <div class="board">
        <guid-card class="board-item"/>
    </div>
</template>

<script>

import GuidCard from '@/components/GuidCard.vue'

export default {
    components: {
        GuidCard
    },

}

</script>

<style scoped>

.board {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}


</style>