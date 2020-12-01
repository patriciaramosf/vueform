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
    },
    getters:{  
        getField,
    },
});