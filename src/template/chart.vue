<template>
  <div class="container-fluid">
    <h3 class="pagetitle"><i class="fas fa-angle-left"  v-on:click="goBack()"></i> {{ msg }}</h3>    
    <div class="row">
      <div class="col-12 col-sm-6">
          <div class="whitebox p-3 ">
            <barchat />
          </div>
          <p></p>
      </div>
      <div class="col-12 col-sm-6">
          <div class="whitebox p-3 ">
            <linechart />
          </div>
          <p></p>
      </div>
      <div class="col-12 col-sm-6">
          <div class="whitebox p-3 ">
            <piechat />
          </div>
          <p></p>
      </div>
      <div class="col-12 col-sm-6">
          <div class="whitebox p-3 ">
            <doughnutchart />
          </div>
          <p></p>
      </div>
      <div class="col-12 col-sm-6">
          <div class="whitebox p-3 ">
            <scatter-chart />
          </div>
          <p></p>
      </div>
      <div class="col-12 col-sm-6">
          <div class="whitebox p-3 ">
            <radarchart />
          </div>
          <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import barchat from '../components/barchart.js';
import linechart from '../components/linechart.js';
import piechat from '../components/piechat.js';
import ScatterChart from '../components/scatterchart.js';
import doughnutchart from '../components/doughnutchart.js';
import radarchart from '../components/radarchart.js';

export default {
  name: 'Chart',
  components: { barchat, linechart, piechat, ScatterChart, doughnutchart, radarchart},
  data () {
    return {
      msg: 'Chart Samples',
    }
  },
  //life cycle hooks
  created : function () {},
  mounted: function () {},  
  
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
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>