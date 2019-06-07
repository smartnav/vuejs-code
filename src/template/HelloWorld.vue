<template>
 <div class="container-fluid">
    <h3 class="pagetitle">{{ msg }}</h3>
    <div class="row">
        <div class="col-4">
          <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" img-top tag="article" class="mb-3" >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" v-b-modal.modal-lg variant="primary">Read More</b-button>
          </b-card>
        </div>
        <div class="col-4">
          <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=26" img-alt="Image" img-top tag="article" class="mb-3" >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Read More</b-button>
          </b-card>
        </div>
        <div class="col-4">
          <b-card title="Card Title" img-src="https://picsum.photos/600/300/?image=24" img-alt="Image" img-top tag="article" class="mb-3" >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary">Read More</b-button>
          </b-card>
        </div>

        <div class="col-12">
          <b-card overlay img-src="https://picsum.photos/900/250/?image=3" img-alt="Card Image" text-variant="white" title="Image Overlay" sub-title="Subtitle" >
            <b-card-text>
              Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            <b-button href="#" variant="primary" @click="toast()">Toaster</b-button>
          </b-card>
          <p></p>
        </div>
        <div class="col-12">
          <b-table responsive bordered striped hover :items="sharedState.items" :fields="sharedState.fields" class="tableBgWColor"></b-table>
          <p></p>

          <b-card-group deck>
            <b-card border-variant="light" header="Directive Content" >
              <div class="whitebox p-3" v-binddata:text.a.b="msg"></div>
            </b-card>
          </b-card-group>
          
          <p></p>
          <!-- <div v-inputField:password /> -->
          <!-- <input v-focus> -->
        </div>
    </div>
    <b-modal id="modal-lg" size="sm" title="Large Modal">
      Hello Large Modal!
      <div slot="modal-footer" class="w-100">
        <p class="float-left">Modal Footer Content</p>
        <b-button variant="primary" size="sm" class="float-right" @click="show=false" >
          Close
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import store from '../store/commonStore';
import customDir from '../directive/customDir'

export default {
  name: 'cards',
  directives: customDir,  // inside directive
  data () {
    return {
      sharedState: store.state,
      msg: 'Cards Sample'
    }
  },
  created : function () {
      //console.log(this.$route)
      this.path = this.$route.path.split('/');
      //console.log(this.path)
      // for(let i = 0; i< this.$route.matched.length; i++){
      //   console.log(this.$route.matched[i].meta.pathname)
      // }
    },
  mounted () {
      
  },
  computed: {
    username () {
      return this.$route.params.username
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
      ? this.$router.go(-1)
      : this.$router.push('/')
    },
    toast () {
      this.$bvToast.toast(`This is toast number ${this.toastCount}`, {
        title: 'BootstrapVue Toast',
        autoHideDelay: 3000,
        appendToast: true,
        variant:"secondary", //primary, danger, warning, success, info
        toaster: 'b-toaster-top-right',
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
