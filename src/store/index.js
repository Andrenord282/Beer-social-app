import {
    createStore
} from "vuex";

export default createStore({
    state: () => ({
        login: false,
        editProfile: false,
        profile: {
            "id": 7731,
            "uid": "92342ccc-04e0-46b9-8acf-b561354152e7",
            "password": "0oJz9P7psg",
            "first_name": "Donella",
            "last_name": "Kozey",
            "username": "donella.kozey",
            "email": "donella.kozey@email.com",
            "avatar": "https://robohash.org/utnihilquibusdam.png?size=300x300\u0026set=set1",
            "gender": "Non-binary",
            "phone_number": "+973 1-204-662-6465 x067",
            "social_insurance_number": "531797777",
            "date_of_birth": "1995-04-12",
            "employment": {
                "title": "Human Representative",
                "key_skill": "Self-motivated"
            },
            "address": {
                "city": "West Darryl",
                "street_name": "Lemke Well",
                "street_address": "30997 Cedric Crossroad",
                "zip_code": "76254-3179",
                "state": "Louisiana",
                "country": "United States",
                "coordinates": {
                    "lat": 34.587183215012885,
                    "lng": 80.35712380671112
                }
            },
            "credit_card": {
                "cc_number": "4151901956745"
            },
            "subscription": {
                "plan": "Bronze",
                "status": "Pending",
                "payment_method": "Bitcoins",
                "term": "Full subscription"
            }
        },
        API_PROFILE: "https://random-data-api.com/api/users/random_user",
        API_BEER: "https://random-data-api.com/api/beer/random_beer",
        prevBeerCard: {},
        currentBeerCard: {
            id: 7231,
            uid: "e9d55905-f568-4770-8a93-1033f77336f4",
            brand: "BudLight",
            name: "Hercules Double IPA",
            style: "Light Lager",
            hop: "Amarillo",
            yeast: "1028 - London Ale",
            malts: "Munich",
            ibu: "60 IBU",
            alcohol: "3.3%",
            blg: "17.2°Blg"
        },
        prevBeerCard: {},
        navBtnState: {
            btnPrev: true
        },
        list: {
            sampleBeerList: [],
            triedBeerList: [],
            favoriteBeerList: [],
        },
        counters: {
            sampleCount: 0,
            triedCount: 0,
            favoriteCount: 0,
        }
    }),

    getters: {
        RENDER_CURRENT_BEER_CARD(state) {
            return state.currentBeerCard;
        },

        SAMPLE_COUNT(state) {
            if (state.list.sampleBeerList.length > 0) {
                return state.counters.sampleCount = state.list.sampleBeerList.length;
            } else {
                return state.counters.sampleCount = 0
            }
        },

        TRIED_COUNT(state) {
            return state.counters.triedCount = state.list.triedBeerList.length;
        },

        FAVORITE_COUNT(state) {
            return state.counters.favoriteCount = state.list.favoriteBeerList.length;
        }
    },

    mutations: {

        // Статус работы кнопки назад
        STATE_BTN_PREV: (state, newState) => {
            state.navBtnState.btnPrev = newState;
        },

        // Перисать текущую картчоку в старую
        PREV_BEER_CARD: (state, newPrevCard) => {
            state.prevBeerCard = state.currentBeerCard;
        },

        // Переписать текущую картчоку на новую с API
        SET_CURRENT_BEER_CARD: (state, newCard) => {
            state.currentBeerCard = newCard;
        },

        // Показать предыдущую карточку
        GET_PREV_CARD: (state) => {
            if (state.navBtnState.btnPrev) {
                state.currentBeerCard = state.prevBeerCard;
                state.navBtnState.btnPrev = false;
                console.log('123')
            }
        },

        // Добавить карточку в лист tried
        ADD_TRIDE_LIST: (state, element) => {
            const uid = element.setItemList.uid;
            const currentElement = element.setItemList;
            const currentList = element.nameList;

            state.list.triedBeerList.push(currentElement);
            if(currentList in state.list){
                state.list[currentList].forEach(element => {
                    for (const key in element) {
                        const value = element[key]
                        if(value == uid){
                            state.list[currentList] = state.list[currentList].filter(item => item !== element)
                        }
                    }
                })
            }
        },

        // Добавить карту в лист sample
        ADD_SAMPLE_LIST: (state, card) => {
            state.list.sampleBeerList.push(card);
        },

        // Добавить карту в лист sample
        ADD_FAVORITE_LIST: (state, element) => {
            const uid = element.setItemList.uid;
            const currentElement = element.setItemList;
            const currentList = element.nameList;

            state.list.favoriteBeerList.push(currentElement);
            if(currentList in state.list){
                state.list[currentList].forEach(element => {
                    for (const key in element) {
                        const value = element[key]
                        if(value == uid){
                            state.list[currentList] = state.list[currentList].filter(item => item !== element)
                        }
                    }
                })
            }
        },

        // Удалить картчоку
        DELETE_CARD: (state, element) => {
            const uid = element.setItemList.uid;
            const currentElement = element.setItemList;
            const currentList = element.nameList;

            if (currentList in state.list) {
                state.list[currentList].forEach(element => {
                    for (const key in element) {
                        const value = element[key]
                        if (value == uid) {
                            state.list[currentList] = state.list[currentList].filter(item => item !== element)
                        }
                    }
                });
            }
        },

        // Выйти из профиля
        EXIT_LOGIN: (state) => {
            state.login = false;
        },

        // Редактировать данные профиля
        SET_PROFILE_INFO: (state, profileAPi) => {
            state.profile = profileAPi;
            state.login = true;
        },

        // Компонент формы
        EDIT_PROFILE: (state) => {
            !state.editProfile ? state.editProfile = true : state.editProfile = false
        },

        // Установить новую информацию в профиль
        SET_VALUE_PROFILE_ITEM: (state, valueEditProfile) => {
            for (const key in valueEditProfile) {
                if (key in state.profile) {
                    state.profile[key] = valueEditProfile[key]
                }
            }!state.editProfile ? state.editProfile = true : state.editProfile = false

        }

    },

    actions: {
        /* Запрос API логин профиля*/
        async LOGIN_PROFILE({
            state,
            commit
        }) {
            try {
                const responseProfileAPI = await fetch(state.API_PROFILE);
                const resoultProfileApi = await responseProfileAPI.json();
                commit('SET_PROFILE_INFO', resoultProfileApi)
            } catch (err) {
                console.error("Произошла ошибка!", error);
            }
        },

        /* Запрос API новую карточку пива в рекомендации
        старую карточку положить в предыдущее значение */
        async GET_BEER_API_CARD({
            state,
            commit
        }) {
            commit('PREV_BEER_CARD', state.currentBeerCard);
            commit('STATE_BTN_PREV', true);
            console.log(state.navBtnState.btnPrev)
            try {
                const responseBeerApiItem = await fetch(state.API_BEER);
                const resoultBeerApiItem = await responseBeerApiItem.json();
                commit('SET_CURRENT_BEER_CARD', resoultBeerApiItem);
            } catch (err) {
                console.error("Произошла ошибка!", error);
            }
        },

        /* Добавить картчоку в лист на пробу, запрос API
        новую карточку пива в рекомендации*/
        async ADD_SAMPLE_LIST_GET_NEW_CARD({
            state,
            commit
        }) {
            commit('ADD_SAMPLE_LIST', state.currentBeerCard);
            try {
                const responseBeerApiItem = await fetch(state.API_BEER);
                const resoultBeerApiItem = await responseBeerApiItem.json();
                commit('SET_CURRENT_BEER_CARD', resoultBeerApiItem);
            } catch (err) {
                console.error("Произошла ошибка!", error);
            }
        }
    }

})