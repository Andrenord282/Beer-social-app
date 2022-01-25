<template>
    <div class="card-beer-wrapper">
        <div class="card-beer-content">
            <div class="card-beer-descr card-beer-descr-top">
                <div class="descr-item">
                    <span>Брэнд:</span> {{ setItemList.brand }}
                </div>
                <div class="descr-item">
                    <span>Стиль:</span> {{ setItemList.style }}
                </div>
                <div class="descr-item">
                    <span>Название</span> {{ setItemList.name }}
                </div>
            </div>
            <div class="card-beer-descr card-beer-descr-middle">
                <div class="descr-item">
                    <span>Хмель:</span> {{ setItemList.hop }}
                </div>
                <div class="descr-item">
                    <span>Солод:</span> {{ setItemList.malts }}
                </div>
                <div class="descr-item">
                    <span>IBU:</span> {{ setItemList.ibu }}
                </div>
                <div class="descr-item">
                    <span>Дрожжи:</span> {{ setItemList.yeast }}
                </div>
            </div>
            <div class="card-beer-descr card-beer-descr-bottom">
                <div class="descr-item">
                    <span>Градус:</span> {{ setItemList.alcohol }}
                </div>
                <div class="descr-item">
                    <span>Экстракт:</span> {{ setItemList.blg }}
                </div>
            </div>
            <div class="card-beer-nav">
                <button
                    class="card-nav-item"
                    @click="this.DELETE_CARD(this.element)"
                >
                    удалить
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    props: {
        setItemList: {
            type: Object,
        },
        idCard: {
            type: String,
        },
    },

    data() {
        return {
            element: {
                setItemList: this.setItemList,
                nameList: "favoriteBeerList",
            },
        };
    },

    methods: {
        ...mapMutations(["DELETE_CARD"]),
    },
};
</script>



<style scoped>
.title {
    margin-bottom: 15px;
}

.card-beer-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px #000 solid;
    padding: 10px;
}

.card-beer-img {
    max-width: 100%;
    margin-bottom: 10px;
}

.card-beer-descr:not(:last-child) {
    margin-bottom: 10px;
}

.descr-item {
    font-size: 14px;
}

.descr-item span {
    font-weight: 500;
}

.card-beer-descr-top {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.card-beer-descr-top .descr-item:not(:last-child) {
    width: 50%;
    margin-bottom: 5px;
}

.card-beer-descr-top .descr-item:last-child {
    width: 100%;
}
.card-beer-descr-middle {
    display: flex;
    flex-direction: column;
}

.card-beer-descr-middle .descr-item:not(:last-child) {
    margin-bottom: 5px;
}
.card-beer-descr-bottom {
    display: flex;
}

.card-beer-descr-bottom .descr-item {
    flex: 0 1 50%;
}

.card-beer-nav {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 0 20px;
}

.card-nav-item {
    justify-self: center;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
    color: #000;
    background-color: #fff;
    border: 1px #000 solid;
    border-radius: 10px;
    padding: 5px;
    transition: all 0.3s linear;
}

.card-nav-item:hover {
    color: #fff;
    background-color: #000;
}
</style>