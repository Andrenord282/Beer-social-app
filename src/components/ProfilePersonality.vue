<template>
    <div class="personality">
        <div class="personality-top">
            <div class="avatar">
                <img :src="this.profile.avatar" alt="" class="avatar-img">
            </div>
            <div class="name">
                <div class="first-name name-item">{{ this.profile.first_name }}</div>
                <div class="last-name name-item">{{ this.profile.last_name }}</div>
            </div>
        </div>
        <div class="personality-bottom date">
            <div class="birth date-item">Дата рождени:{{this.profile.date_of_birth}}</div>
            <div class="age date-item">Возраст: {{getPersonalityAge()}}</div>
        </div>
    </div>
</template>

<script>
import { mapState} from 'vuex'

export default {

    computed: {
        ...mapState(["profile"])
    },

    methods: {
        getPersonalityAge(){
            const thisYear = Date.parse(new Date());
            const birth = Date.parse(this.profile.date_of_birth);
            const Age = Math.floor((thisYear - birth) / (1000 * 60 * 60 * 24 * 365));
            return Age
        }
    },
}

</script>

<style scoped>

.personality{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.personality-top{
    display: flex;
    width: 100%;
    margin-bottom: 25px;
}

.avatar{
    position: relative;
    min-width: 30%;
    margin-right: 30px;
    border-radius: 50px;
    overflow: hidden;
}

.name{
    width: 70%;
    padding: 10px;
}

.name-item{
    font-size: 30px;
    font-weight: 700;
}

.name-item:not(:last-child){
    margin-bottom: 10px;
}

.avatar-img{
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    max-width: 100%;
}

.date{
    align-self: flex-start;
}

.birth{
    margin-bottom: 10px;
}
</style>










