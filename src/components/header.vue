<template>
  <header class="fullblock">
    <div class="m-show">
      <span class="toogle" @click="this.toggle"><i class="fas fa-bars" ></i></span>
    </div>
    <div v-if="moblogoUrl" class="logo m-show">
      <router-link to="/"><img v-bind:src="moblogoUrl" /></router-link>
    </div>
    <div v-else class="logo m-show">
      <h4><router-link to="/">{{ logoText }}</router-link></h4>
    </div>
    <nav>
      <button @click="this.logout" class="bt btn-primary"><i class="fas fa-sign-out-alt m-show"></i><span class="d-md-block d-none">Logout</span></button>
    </nav>
  </header>
</template>

<script>
import myMixins from '../mixin/mixins'
export default {
  name: 'AppHeader',
  props: ['logoText', 'moblogoUrl'],
  mixins: [myMixins],
  data () {
	return {
		msg: 'Header'
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
    logout () {
      window.localStorage.removeItem('token')
      this.$router.push('/login')
    },
    toggle(){
      this.$emit("toggleval", this.toggle);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header{display:flex; width:100%; padding:0 15px; min-height:75px; align-items: center; justify-content: flex-end; margin-bottom:15px;//background:var(--primary); 
  a{color:#fff;}
  .logo {width: 100%; text-align: center; color:#7b7a7a; padding:10px 0;
    h4{margin:0;}
    img{max-height:60px; width:auto}
  }
}
.toogle{cursor: pointer; padding:8.5px 10px; background: var(--secondary); color: #fff; z-index: 9;}
@media (max-width:640px){
  header{justify-content: center; background: var(--primary); 
    div, nav{width:100%}
    nav{text-align: right;
      .bt{padding:9px}
    }
  }
}
</style>
