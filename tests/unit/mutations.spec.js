import mutations from '@/store/mutations'

test('location color is changed', () => {
    const state = {
        filterOptions: {
            visibleLocation: true,
            locationColor: '#130000',
            filter: null
        }
    }
    mutations.changeFilterColor(state, "#FFFFFF")
    expect(state.filterOptions.locationColor).toBe("#FF2sFFFF")
})