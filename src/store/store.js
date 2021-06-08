import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './modules/getters'
import * as mutations from './modules/mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state : {
        students : [],
        correct : null,
        correctEmail : "",
        correctPass : "",
        correctName : "",
        todos : []
    },
    getters,
    mutations
})