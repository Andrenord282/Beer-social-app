<template>
    <div class="list-profile">
        <button
            v-if="this.login == false"
            class="btn-login"
            @click="this.LOGIN_PROFILE"
        >
            Логин
        </button>
        <div v-else class="profile-content">
            <button class="btn-set-profile" v-show="this.editProfile == false" @click="this.EDIT_PROFILE">
                Редактировать
            </button>
            <form-edit-profile  v-if="this.editProfile == true"/>
            <div class="profile" v-else>
                <profile-personality class="prifile-item" />
                <profile-contacts class="prifile-item" />
                <profile-adress class="prifile-item" />
                <profile-employment class="prifile-item" />
                <button
                    v-if="this.login == true"
                    class="btn-exit"
                    @click="this.EXIT_LOGIN"
                >
                    Выход
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import ProfilePersonality from "@/components/ProfilePersonality";
import ProfileContacts from "@/components/ProfileContacts";
import ProfileAdress from "@/components/ProfileAdress";
import ProfileEmployment from "@/components/ProfileEmployment";
import FormEditProfile from "@/components/FormEditProfile";

import { mapActions, mapMutations, mapState } from "vuex";

export default {
    components: {
        ProfilePersonality,
        ProfileContacts,
        ProfileAdress,
        ProfileEmployment,
        FormEditProfile,
    },

    computed: {
        ...mapState(["login", "editProfile"]),
    },

    methods: {
        ...mapMutations(["EXIT_LOGIN", "EDIT_PROFILE"]),
        ...mapActions(["LOGIN_PROFILE"]),
    },
};
</script>

<style scoped>

.list-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn-login{
    justify-self: center;
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 900;
    color: #000;
    background-color: #fff;
    border: 4px #000 solid;
    border-radius: 20px;
    padding: 20px 30px;
    transition: all .3s linear;
}

.btn-login:hover,.btn-exit:hover,.btn-set-profile:hover{
    color: #fff;
    background-color: #000;
}

.profile-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.btn-set-profile {
    align-self: flex-end;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 400;
    color: #000;
    background-color: #fff;
    border: 1px #000 solid;
    padding: 5px;
    transition: all .3s linear;
    margin-right: 15px;
    margin-bottom: 10px;
}

.profile{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 auto;
}

.prifile-item {
    width: 100%;
    padding: 10px 20px;
    border-bottom: 1px solid rgb(237 237 237);
    box-shadow: 3px 6px 5px rgb(229 227 227);
}

.btn-exit {
    align-self: flex-end;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 400;
    color: #000;
    background-color: #fff;
    border: 1px #000 solid;
    padding: 5px;
    transition: all .3s linear;
    margin-right: 15px;
    margin-bottom: 10px;
}
</style>