<template>
    <b-container>
        <div class="accordion" role="tablist">
            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-1 variant="info"> Hide/Show Locations</b-button>
                </b-card-header>
                <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        Hide/Show Locations
                        <b-form-checkbox id="showLocations" v-model="showLocations" switch>
                        </b-form-checkbox>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-2 variant="info"> Select a building</b-button>
                </b-card-header>
                <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        Select a building
                        <b-form-select v-model="selectedBuilding" :options="buildingOptions"></b-form-select>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-3 variant="info"> Change location point color</b-button>
                </b-card-header>
                <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        Change location point color
                        <b-form-input id="changeLocationColor" type="color"
                                      v-model="changeLocationColor"></b-form-input>
                    </b-card-body>
                </b-collapse>
            </b-card>


            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-4 variant="info"> Search Title</b-button>
                </b-card-header>
                <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        Search Title (exact match)
                        <b-form-input type="text" v-model="searchTitleTextFilter"></b-form-input>
                        <small>e.g. LOUIS VUITTON SYDNEY</small>
                    </b-card-body>
                </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
                <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle.accordion-5 variant="info"> Ownership type</b-button>
                </b-card-header>
                <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                    <b-card-body>
                        Ownership type
                        <b-form-checkbox-group
                                @change="searchOwnerShip"
                                v-model="selectedOwnerships"
                                :options="options"
                                class="mb-3"
                                value-field="item"
                                text-field="name"
                        ></b-form-checkbox-group>
                    </b-card-body>
                </b-collapse>
            </b-card>
        </div>

    </b-container>
</template>

<script>
    import geoSource from "../assets/testBlob.json";
    import {
        BFormCheckboxGroup,
        BCollapse,
        BCard,
        BCardBody,
        BContainer,
        BFormInput,
        BButton,
        BFormSelect,
        BCardHeader,
        VBToggle,
        BFormCheckbox
    } from "bootstrap-vue";

    export default {
        components: {
            BFormInput,
            BButton,
            BFormSelect,
            BCardHeader,
            BFormCheckboxGroup,
            BCollapse,
            BCard,
            BCardBody,
            BContainer,
            BFormCheckbox
        },
        directives: {
            "b-toggle": VBToggle
        },
        data() {
            return {
                buildingOptions: [],
                selectedBuilding: null,
                options: [
                    {item: 'STATE', name: 'STATE'},
                    {item: 'PRIVATE', name: 'PRIVATE'}
                ],
                selectedOwnerships: [],
                changeLocationColor: this.$store.state.filterOptions.locationColor, // point color filter
                searchTitleTextFilter: null,
                showLocations: false
            };
        },
        watch: {
            changeLocationColor: function (val) {
                this.$store.commit("changeFilterColor", val);
            },
            showLocations: function (val) {
                let filter;
                if (val) {
                    filter = ["<", ['get', 'Long', ['get', 'project']], -1111]
                } else {
                    filter = this.emptyFilterExpression();
                }
                this.$store.commit("searchFilter", filter);
            },
            selectedBuilding: function (val) {
                this.searchTitle(val);
            },
            searchTitleTextFilter: function (val) {
                this.searchTitle(val);
            },
        },
        methods: {
            // clean up filter by using default filter that check if long > 0
            emptyFilterExpression() {
                return [">", ['get', 'Long', ['get', 'project']], 0];
            },
            // use match expression to match if val is equal
            searchTitle(val) {
                let filter;
                if (val) {
                    filter = ['match', ['get', 'Title', ['get', 'project']], [val], true, false];
                } else {
                    filter = this.emptyFilterExpression();
                }
                this.$store.commit("searchFilter", filter);
            },
            // use match expression to match if all conditions are equal
            searchOwnerShip() {
                let filter;
                if (this.selectedOwnerships.length > 0) {
                    filter = ['match', ['get', 'Ownership', ['get', 'project']], this.selectedOwnerships, true, false];
                } else {
                    filter = this.emptyFilterExpression();
                }
                this.$store.commit("searchFilter", filter);
            },
        },
        created() {
            // create a list of options from given geo data for Title list
            this.buildingOptions = geoSource.features.map((item) => {
                return {value: item.properties.project.Title, text: item.properties.project.Title};
            });
        }
    };
</script>