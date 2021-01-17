<template>
  <div>
    <MglMap  id="mapbox-map" :accessToken="accessToken" :mapStyle="mapStyle" :zoom="zoom" :center="center" >

      <MglGeojsonLayer
              :sourceId="geoJsonSource.data.id"
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
  import geoSource from "../assets/testBlob.json";
  export default {
    components: {
      MglMap,
      MglGeojsonLayer
    },
    data() {
      return {
        accessToken: 'pk.eyJ1IjoicnlhbmRhZGVuZyIsImEiOiJja2sxMTlrOWYwNHN5Mm9vZjh0b2lmdTN0In0.pzqSXgSy9HSgsLERdPW4CA', // your access token. Needed if you using Mapbox maps
        mapStyle: 'mapbox://styles/ryandadeng/ckk11xfpq227c17qblxo082of', // your map style
        geoJsonSource: geoSource,
        center: [151.2093,-33.8688],
        zoom: 13,
        geoJsonLayer: {
          type: "circle",
          paint: {
            "circle-color": "red"
          }
        }
      };
    },

    created() {
      // We need to set mapbox-gl library here in order to use it in template
      this.mapbox = Mapbox;
    }
  };
</script>


<style>
  #mapbox-map {
    width: 100%;
    height: 100%;
  }
</style>