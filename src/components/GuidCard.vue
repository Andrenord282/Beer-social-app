<template>
        <div class="card-beer-wrapper">
            <h2 class="title">Рекомендации пива</h2>
            <div class="card-beer-content">
                <div class="card-beer-descr card-beer-descr-top">
                    <div class="descr-item">
                        <span>Брэнд:</span> {{ this.currentBeerCard.brand }}
                    </div>
                    <div class="descr-item">
                        <span>Стиль:</span> {{ this.currentBeerCard.style }}
                    </div>
                    <div class="descr-item">
                        <span>Название</span> {{ this.currentBeerCard.name }}
                    </div>
                </div>
                <div class="card-beer-descr card-beer-descr-middle">
                    <div class="descr-item">
                        <span>Хмель:</span> {{ this.currentBeerCard.hop }}
                    </div>
                    <div class="descr-item">
                        <span>Солод:</span> {{ this.currentBeerCard.malts }}
                    </div>
                    <div class="descr-item">
                        <span>IBU:</span> {{ this.currentBeerCard.ibu }}
                    </div>
                     <div class="descr-item">
                         <span>Дрожжи:</span> {{ this.currentBeerCard.yeast }}
                    </div>
                </div>
                <div class="card-beer-descr card-beer-descr-bottom">
                    <div class="descr-item">
                        <span>Градус:</span> {{ this.currentBeerCard.alcohol }}
                    </div>
                    <div class="descr-item">
                        <span>Экстракт:</span> {{ this.currentBeerCard.blg }}
                    </div>
                </div>
                <div class="card-beer-nav">
                    <button class="card-nav-item" @click="this.GET_PREV_CARD">prev</button>
                    <button class="card-nav-item" @click="this.ADD_SAMPLE_LIST_GET_NEW_CARD">add</button>
                    <button class="card-nav-item" @click="this.GET_BEER_API_CARD">next</button>
                </div>
            </div>
        </div>
</template>

<script>

import { mapActions, mapMutations, mapState} from 'vuex'

export default {

    computed: {
        ...mapState(["currentBeerCard"]),
        ...mapMutations(["GET_PREV_CARD"])
    },

    methods: {
        ...mapActions(["RENDER_CARD_MOUNT",
                        "GET_BEER_API_CARD",
                        "ADD_SAMPLE_LIST_GET_NEW_CARD"
                        ])
    },

}
</script>

<style scoped>

.title {
    text-align: center;
    margin-bottom: 15px;
}

.card-beer-content{
    min-height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px #000 solid;
    padding: 10px;
}

.card-beer-img{
    max-width: 100%;
    margin-bottom: 10px;
}

.card-beer-descr:not(:last-child){
    margin-bottom: 10px;
}

.descr-item{
    font-size: 14px;
}

.descr-item span{
    font-weight: 500;
}

.card-beer-descr-top{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}

.card-beer-descr-top .descr-item:not(:last-child){
    width: 50%;
    margin-bottom: 5px;
}

.card-beer-descr-top .descr-item:last-child{
    width: 100%;
}
.card-beer-descr-middle{
    display: flex;
    flex-direction: column;
}

.card-beer-descr-middle .descr-item:not(:last-child){
    margin-bottom: 5px;
}
.card-beer-descr-bottom{
    display: flex;
}

.card-beer-descr-bottom .descr-item{
    flex: 0 1 50%;
}

.card-beer-nav{
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 0 20px;
}

.card-nav-item{
    justify-self: center;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: 400;
    color: #000;
    background-color: #fff;
    border: 1px #000 solid;
    border-radius: 20px;
    padding: 5px;
    transition: all .3s linear;
}

.card-nav-item:hover{
    color: #fff;
    background-color: #000;
}

</style>