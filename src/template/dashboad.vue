<template>
  <div class="container-fluid">
    <h3 class="pagetitle">{{ msg | capitalize}}</h3>
    
    <div class="row">
      <div class="col-12 col-md-7 col-lg-9">
        <div class="whitebox p-2" id="chartdiv"></div>
        <p></p>
      </div>
      <div class="col-12 col-md-5 col-lg-3 ">
        <div class="whitebox p-3 iconitem">
          <span><i class="fas fa-2x fa-users"></i></span>
          <strong :title="'Total Users'">Total Users</strong>
          <p>452130</p>
        </div>
        <p></p>
        <div class="whitebox p-3 iconitem">
          <span><i class="fas fa-2x fa-user-friends"></i></span>
          <strong :title="'Active Users'" >Active Users</strong>
          <p>151630</p>
        </div>
        <p></p>
        <div class="whitebox p-3 iconitem">
          <span><i class="far fa-2x fa-newspaper"></i></span>
          <strong :title="'Total Post'">Total Post</strong>
          <p>500</p>
        </div>
        <p></p>
        <div class="whitebox p-3 iconitem">
          <span><i class="far fa-2x fa-chart-bar"></i></span>
          <strong :title="'Chart'">Chart</strong>
          <p>452130</p>
        </div>
        <p></p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <gmap-map :center="center" :zoom="12" style="width:100%;  height: 300px;" >
          <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position" ></gmap-marker>
        </gmap-map>
        <p></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="whitebox">
          <b-list-group>
            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Cras justo odio
              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <b-badge variant="primary" pill>2</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Morbi leo risus
              <b-badge variant="primary" pill>1</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Cras justo odio
              <b-badge variant="primary" pill>14</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Dapibus ac facilisis in
              <b-badge variant="primary" pill>2</b-badge>
            </b-list-group-item>

            <b-list-group-item class="d-flex justify-content-between align-items-center">
              Morbi leo risus
              <b-badge variant="primary" pill>1</b-badge>
            </b-list-group-item>
          </b-list-group>
          <p></p>
        </div>
      </div>
      <div class="col-md-6">
        <b-table responsive bordered striped hover :items="sharedState.items" :fields="sharedState.fields" class="tableBgWColor"></b-table>
        <p></p>
        <button class="bt btn-primary" v-on:click="updateVal()" >Update first user age</button>
        <p></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <h4>API Data</h4>
        <b-table responsive bordered striped hover :items="sharedState.data" :fields="tabelheader" class="tableBgWColor">
          <!-- slot-scope="row" -->
           <template slot="action" >
            <b-button size="sm" class="mr-1" variant="outline-danger"><i class="fas fa-trash"></i></b-button>
          </template>
        </b-table>
        <p></p>
      </div>
    </div>
    <!-- {{sharedState.message}} -->      
  </div>
</template>

<script>
import store from '../store/commonStore';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";


function worldmapData () {
  var chart = am4core.create("chartdiv", am4maps.MapChart);
  am4core.useTheme(am4themes_animated);
  // Set map definition  
  chart.geodata = am4geodata_worldLow;
  // Set projection
  chart.projection = new am4maps.projections.Miller();
  // Create map polygon series
  var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  // Exclude Antartica
  polygonSeries.exclude = ["AQ"];
  polygonSeries.data = [{"id": "US", "name": "United States", "value": 100, "fill": am4core.color("#009d87") },
    {"id": "FR", "name": "France", "value": 50, "fill": am4core.color("#009d87") },
    {"id": "AU", "selected": true },];
  // Make map load polygon (like country names) data from GeoJSON
  polygonSeries.useGeodata = true;
  // Configure series
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.propertyFields.fill = "fill";
  // polygonTemplate.tooltipText = "{name} : {id} - {value}";    // normal text
  polygonTemplate.tooltipHTML  = `<p>{name}</p>`
  polygonTemplate.fill = am4core.color("#00c3a8");
  // Create hover state and set alternative fill color
  var hs = polygonTemplate.states.create("hover");
  hs.properties.fill = am4core.color("#009d87");
  // Create active state
  var as = polygonTemplate.states.create("active");
  as.properties.fill = am4core.color("#7B3625");
  
  chart.events.on("ready", function() {  
    chart.seriesContainer.draggable = true;
    chart.seriesContainer.resizable = true;
  });
}

export default {
  name: 'Dashboad',
  data () {
    return {
      sharedState: store.state,
      msg: 'dashboad', 
      tabelheader: [{key:'name',sortable: true}, {key:'phone',sortable: true}, {key:'website',label: 'Website',sortable: true}, {key:'action',label: 'Action',}]   ,
      
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    }
  },
  //life cycle hooks
  created : function () {
    //console.log(this.$route)
    this.path = this.$route.meta.pathname;
    for(let i = 0; i< this.$route.matched.length; i++){
      //console.log(this.$route.matched[i].meta.pathname)
    }    
  },
  mounted: function () {
    //store.setMessageAction('text change')
    store.userlist();
    this.geolocate();
  },
  beforeMount: function () {
    //console.log('beforeMount')
  },  
  beforeUpdate: function () {
    //console.log('beforeUpdate')
  },
  updated: function () {
    //console.log('updated')    
    worldmapData();
  },
  activated: function () {
    //console.log('activated')
  },
  deactivated: function () {
    //console.log('deactivated')
  },
  beforeDestroy: function () {
    //console.log('beforeDestroy')
    store.CleanUserlist();
    if (this.chart) {
      this.chart.dispose();
    }
  },  
  destroyed: function () {
    //console.log('destroyed')
  },
  
  computed: {
    username () {
      // We will see what `params` is shortly      
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    updateVal () {
      store.updatedata()
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .iconitem {
    span{display: flex; position: absolute; color: #fff; box-shadow: 0 0 4px #cfcfcf; transform: scale(1.1); top: 0; left: 15px; height: 100%; width: 56px; justify-content: center; align-items: center; background:var(--primary)}
    strong{text-align: right; width: 100%; display: block; padding-left: 69px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;}
    p{text-align: right; margin: 0; padding-left: 70px;}
  }
  #chartdiv{height: 59vh; }  
</style>