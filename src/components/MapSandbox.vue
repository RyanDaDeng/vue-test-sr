<template>
  <div>
    <MglMap id="mapbox-map" :accessToken="accessToken" :mapStyle="mapStyle" :zoom="zoom" :center="center" >
      <MglGeojsonLayer
              sourceId="thisIsMySource"
              :source="geoJsonSource"
              layerId="somethingSomething"
              :layer="geoJsonLayer"
      />
    </MglMap>
  </div>
</template>

<script>
  import Mapbox from "mapbox-gl";
  import { MglMap, MglGeojsonLayer } from "vue-mapbox";
  import geoSource from "../assets/testBlob.json"; // provided geo data

  export default {
    components: {
      MglMap,
      MglGeojsonLayer
    },
    data() {
      return {
        accessToken: process.env.VUE_APP_ACCESS_TOKEN,
        mapStyle: 'mapbox://styles/ryandadeng/ckk11xfpq227c17qblxo082of',
        geoJsonSource: {
          type: "geojson",
          data: geoSource
        },
        center: [151.2093,-33.8688], // default to NSW sydney CBD area
        zoom: 14,
        geoJsonLayer: {
          type: "circle",
          paint: {
            'circle-radius': 8,
            'circle-color': this.$store.state.filterOptions.locationColor,
          },
           filter: [">", ['get','Long',['get', 'project']],0] // using mapbox expressions, by default, get all dots when long > 0
        }
      };
    },
    watch: {
      // watch state changes from vuex store
      '$store.state.filterOptions': {
        deep: true,
        handler(newVal) {
          this.geoJsonLayer.paint["circle-color"]= newVal.locationColor;
          this.geoJsonLayer.filter = newVal.filter;
        }
      }
    },
    methods:{
    },
    created() {
      this.mapbox = Mapbox;
      console.log(this.mapbox.Map.getFeatureState)
    }
  };
</script>


<style>
  #mapbox-map {
    width: 100%;
    height: 1000px;
  }
</style>