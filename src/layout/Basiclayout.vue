<template>  
  <main>
    <div class="layout">
      <transition name="slide-fade">
        <!-- v-if="menutoggle"  -->        
        <div class="sublayout sidebar" v-if="menutoggle" v-bind:class="{mobMenu : menutoggle }" >
          <AppSidebar @toggleval="hidesidebar" logoText="LOGO" />
          <!-- logoImgUrl="logo image url"  -->
        </div>
      </transition>
      <div class="sublayout">
        <AppHeader @toggleval="hidesidebar" logoText="LOGO" />
        <!-- moblogoUrl="logo image url"  -->        
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </main>
</template>

<script>
  import AppHeader from '../components/header.vue'
  import AppSidebar from '../components/sidebar.vue'
  import myMixins from '../mixin/mixins'
  export default {
    name: 'Basiclayout',
    mixins: [myMixins],
    created : function () {
      //console.log(this.$route)
      this.path = this.$route.meta.pathname;
    },
    components: {
      AppHeader, AppSidebar
    },
    data () {
      return {
        path:'',
        fullWidth: document.documentElement.clientWidth,
        mobmenu:false
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize)
      this.handleResize();
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize)
    },
    methods: {
      hidesidebar () {
        if(this.fullWidth < 641)
          this.menutoggle = !this.menutoggle
      },
      handleResize () { //(event)
        this.fullWidth = document.documentElement.clientWidth;
        if(this.fullWidth < 641)
          {this.menutoggle = false;
          this.mobmenu = true;}
        else
          {this.menutoggle = true;
          this.mobmenu = false;}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  main{background:#eee}
  .layout {
      display: flex;
      .sublayout{width:100%; min-height: 100vh; position:relative;}
      .sidebar{min-width:250px; max-width:250px; color:#fff;
          background-color: rgba(80, 80, 80, 1);
          //background-image: url(https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg);
          //background-size: cover;
          //background-position: left;
          //background-attachment: fixed;
          box-shadow: 5px 0 10px #999;
           transition: all .5s ease;
        &:before { content: ''; position: absolute; background: rgba(80, 80, 80, 1); height: 100%; width: 100%;   left: 0; z-index: 0; }
        div{position:relative; z-index:0}        
      }
  }
  .fade-enter-active, .fade-leave-active {transition: opacity .5s;}
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {opacity: 0; position: absolute;}

  .slide-fade-enter-active {transition: all .3s ease;}
  .slide-fade-leave-active {transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
  .slide-fade-enter, .slide-fade-leave-to{transform: translateX(-50px); opacity: 0;}
  @media (max-width:900px){
    .sidebar{min-width:200px;}
  }
  @media (max-width:640px){
    .layout {
      .sidebar{position: fixed; z-index: 1; left: -100%; background-image:none; background-color: rgba(80, 80, 80, 1);}
      .mobMenu.sidebar{left: 0; transition: all .5s ease;}
    }
  }
</style>
