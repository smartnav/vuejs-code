<template>
  <div class="sidebarBox">
    <div v-if="logoImgUrl" class="logo">
      <router-link to="/"><img v-bind:src="logoImgUrl" /></router-link>
      <span class="d-block d-md-none toogle" @click="this.toggle"><i class="fas fa-times" ></i></span>
    </div>
    <div v-else class="logo">
      <h3><strong><router-link to="/">{{ logoText }}</router-link></strong></h3>
      <span class="d-block d-md-none toogle" @click="this.toggle"><i class="fas fa-times" ></i></span>
    </div>
    <ul class="nav" >
      <li @click="toggle" v-for="item in menu" v-bind:key="item.url">
        <router-link v-if="item.url" v-bind:to="item.url">
          <i class="fas" v-if="!item.imageUrl" :class="item.iconName"></i>
          <img v-else :src="item.imageUrl" />
           {{item.name}}</router-link>
        <a v-else  @click="show(item.name)"><i class="fas" :class="item.iconName"></i> {{item.name}} <i class="fas float-right p-1" 
        v-bind:class="[item.name === activeSubMenu ? 'fa-angle-up': 'fa-angle-down']"
        ></i></a>
        <ul class="submenu" :class="[item.name === activeSubMenu ? '':'hide']" >
           <!-- v-if="item.name === activeSubMenu"  -->
          <li @click="toggle" v-for="childitem in item.child" v-bind:key="childitem.url">
            <router-link v-bind:to="childitem.url" >
              <i class="fas" v-if="!childitem.imageUrl" :class="childitem.iconName"></i>
              <img v-else :src="childitem.imageUrl" />
               {{childitem.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSidebar',
  props: ['logoText', 'logoImgUrl'],
  data () {
	return {
    msg: 'Logo',
    activeurl: '',
    activeSubMenu: '',
    menu: [
      {name: 'Dashboard', url: '/', iconName:'fa-tachometer-alt', imageUrl:''},
      {name: 'Charts', url: '/chart', iconName:'fa-chart-bar', imageUrl:''},
      {name: 'Other', iconName:'fa-th-large', imageUrl:'',
        child: [
          {name: 'Cards', url: '/hello', iconName:'fa-id-card', imageUrl:''},
          {name: 'Page not found', url: '/pagenotfound', iconName:'fa-exclamation-triangle', },
          // imageUrl:'https://image.flaticon.com/icons/svg/1746/1746654.svg'
        ]
      },
      {name: 'Setting', url: '/setting', iconName:'fa-user-cog', imageUrl:''}
    ]
  }
  
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
    toggle(){
      this.$emit("toggleval", this.toggle)
    },
    show (val) {
      this.activeSubMenu === val ? this.activeSubMenu ='' : this.activeSubMenu = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
    display: inline-block;
    width: 100%;
    text-align: center;
    color:#7b7a7a;
    padding:10px 0;
    margin: 0 0 20px;
    border-bottom:1px solid var(--primary);
    h3{margin:10px 0;}
    img{max-height:60px; width:auto}
}
.sidebarBox{padding:0 15px;}
.submenu{
  list-style: none; padding-left: 25px; position: relative;
  li{border-left: 2px dotted var(--primary); padding-left: 5px; }
}
@media (max-width:640px){
  .sidebarBox{
    .logo{ display: flex; align-items: center; justify-content: space-between;}
  }
}
</style>
