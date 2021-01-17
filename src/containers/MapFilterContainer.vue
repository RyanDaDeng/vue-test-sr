<template>
    <b-container fluid>
        <b-row>
            <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                <div class="sidebar-sticky">
                    <h3>Simple Location Filters</h3>
                    <b-card>
                        <map-filters></map-filters>
                    </b-card>
                </div>
            </nav>

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <b-card>
                    <map-sandbox></map-sandbox>
                </b-card>
            </main>
        </b-row>
    </b-container>
</template>

<script>
    import MapSandbox from "@/components/MapSandbox";
    import MapFilters from "@/components/MapFilters";

    export default {
        name: "MapFilterContainer",
        components: {MapFilters, MapSandbox},
        data() {
            return {};
        },
    }
</script>

<style scoped>

</style>