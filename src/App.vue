<template>
    <div class="wrapper-app">
        <lists-beer class="app-item" v-show="this.login == true"/>
        <board class="app-item" v-show="this.login == true"/>
        <profile-list class="app-item" />
    </div>
</template>

<script>

import ListsBeer from "@/components/ListsBeer";
import Board from "@/components/Board";
import ProfileList from '@/components/ProfileList'
import { mapState } from 'vuex'
export default {

    components: {
        ListsBeer,
        Board,
        ProfileList
    },

    computed: {
        ...mapState(["login"])
    }
};

</script>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Montserrat;
}

@media (max-width: 1199px) {
    .wrapper-app {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .app-item {
        width: 100%;
        min-height: 500px;
        padding: 30px 0;
        background-color: rgb(243, 243, 243);
        border: 4px rgb(231, 231, 231) solid;
        box-shadow: 3px 6px 5px rgba(215, 210, 210, 1);
        overflow: hidden;
    }

    .list-profile{
        order: 1;
    }
   
}


@media (min-width: 1200px) {
    .wrapper-app {
        display: flex;
        justify-content: center;
        width: 1200px;
        height: 1000px;
        background-color: rgb(255, 255, 255);
        padding: 20px;
        margin: 0 auto; 
    }

    .app-item {
        width: 33.3333%;
        padding: 30px 0;
        background-color: rgb(243, 243, 243);
        border: 4px rgb(231, 231, 231) solid;
        border-radius: 30px;
        box-shadow: 3px 6px 5px rgba(215, 210, 210, 1);
        overflow: hidden;
 
    }
   .app-item:not(:last-child) {
        
    }
}




</style>

