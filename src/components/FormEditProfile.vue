<template>
    <form class="wrapper-form" @submit.prevent>
        <div>
            <p>Имя</p>
            <input
                placeholder="Имя"
                type="text"
                v-model="newProfile.first_name"
            />
        </div>
        <div>
            <p>Фамилия</p>
            <input
                placeholder="Фамилия"
                type="text"
                v-model="newProfile.last_name"
            />
        </div>
        <div>
            <p>Username</p>
            <input
                placeholder="Username"
                type="text"
                v-model="newProfile.use_name"
            />
        </div>
        <div>
            <p>Email</p>
            <input placeholder="Email" type="text" v-model="newProfile.email" />
        </div>
        <div>
            <p>Телефон</p>
            <input
                placeholder="Телефон"
                type="text"
                v-model="newProfile.phone_number"
            />
        </div>
        <div class="btns">
            <button class="btn-item-form" @click="EDIT_PROFILE">Отмена</button>
            <button class="btn-item-form" @click="setProfile">Изменить</button>
        </div>
    </form>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            newProfile: {
                first_name: "",
                last_name: "",
                use_name: "",
                email: "",
                phone_number: "",
            },
        };
    },

    methods: {
        ...mapMutations(["SET_VALUE_PROFILE_ITEM", "EDIT_PROFILE"]),
        setProfile() {
            this.SET_VALUE_PROFILE_ITEM(this.newProfile);
        },
    },
};
</script>

<style scoped>

.wrapper-form{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
}

.wrapper-form > div {
    width: 100%;
}

p{
    margin-bottom: 10px;
}

input{
    height: 40px;
    width: 90%;
    margin-bottom: 10px;
}

.btns{
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    padding: 0 5px;
}

.btn-item-form{
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

.btn-item-form:hover {
    color: #fff;
    background-color: #000;
}


</style>