import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        firstName:'',
        surName:'',
        birthDate:'',
        country:'',
        hobby:'',
        job:'',
        mood:'',
        wishes:''
    },
     mutations:{
        updateField,
        setBirthDate(state, birthDate){
            state.birthDate= birthDate
        },
        setCountry(state, country){
            state.country = country
        },
        setHobby(state, hobby){
            state.hobby = hobby
        },
        setJob(state, job){
            state.job = job
        },
        setMood(state, mood){
            state.mood = mood
        },
        setWishes(state, wishes){
            state.wishes = wishes
        },
    },
    getters:{  
        getField,
    },
});