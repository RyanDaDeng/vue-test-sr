import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations"
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
    mutations,
    actions: {}
});