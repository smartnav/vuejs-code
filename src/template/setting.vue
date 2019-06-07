<template>
  <div class="container-fluid">    
    <div class="row">
      <div class="col-12">
        <div class="bg-white p-4">
          <!-- <b-tabs content-class="mt-3">
            <b-tab title="First" active><p>I'm the first tab</p></b-tab>
            <b-tab title="Second"><p>I'm the second tab</p></b-tab>
            <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
          </b-tabs> -->
          <b-row>
            <b-col sm="6" md="5">
              <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group id="input-group-1" label="" label-for="input-1">
                  <!-- <b-form-input id="input-1" v-model="form.oldPassword" type="password" required placeholder="Enter old password" autocomplete ></b-form-input> -->
                  <input id="input-1" class="form-control rounded-0" v-model="form.oldPassword" type="password" required placeholder="Enter old password" autocomplete />
                </b-form-group>
                <b-form-group id="input-group-2" label="" label-for="input-2">
                  <!-- <b-form-input id="input-2" v-model="form.newPassword" required placeholder="Enter new password" ></b-form-input> -->
                  <input class="form-control rounded-0" id="input-2" v-model="form.newPassword" required placeholder="Enter new password" autocomplete />
                </b-form-group>
                <b-form-group id="input-group-3" label="" label-for="input-3">
                  <!-- <b-form-input id="input-3" v-model="form.CPassword" required placeholder="Enter confirm password" ></b-form-input> -->
                  <input id="input-3" class="form-control rounded-0" v-model="form.CPassword" required placeholder="Enter confirm password" autocomplete />
                </b-form-group>
                <b-button type="submit" class="rounded-0" variant="primary">Submit</b-button>&nbsp;
                <b-button type="reset" class="rounded-0" variant="danger">Reset</b-button>
              </b-form>
            </b-col>
          </b-row>          
        </div>
      </div>
    </div>      
  </div>
</template>

<script>
export default {
  name: 'Setting',
  data () {
	return {
		form: {
      oldPassword: '',
      newPassword: '',
      CPassword: '',
    },
    show: true
	}
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
    onSubmit(evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    }
  }
}
</script>