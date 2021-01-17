// store/index.js

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filterOptions: {
            visibleLocation: true,
            locationColor: '#130000',
            filter: null
        }
    },
    getters: {},
    mutations: {
        changeFilterColor (state, payload) {
            state.filterOptions.locationColor = payload
        },
        searchFilter (state, payload) {
            state.filterOptions.filter = payload
        },
    },
    actions: {}
});

