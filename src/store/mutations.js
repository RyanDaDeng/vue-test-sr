export default {
    changeFilterColor (state, payload) {
        state.filterOptions.locationColor = payload
    },
    searchFilter (state, payload) {
        state.filterOptions.filter = payload
    },
}