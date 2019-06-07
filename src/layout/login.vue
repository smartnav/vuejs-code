<template>
  <div class="login">
    
	<div class="formlayout">
		<h2><Strong>{{ msg }}</strong></h2>
		<form @submit.prevent="login()"  method="post" class="form">
			<div class="form-feild">
				<input class="input-feild" type="text" placeholder="Username" v-model="username" autocomplete/>
				<span class="error">{{usernameerror}}</span>
			</div>
			<div class="form-feild">
				<input class="input-feild" type="password" placeholder="Password" v-model="password" autocomplete />
				<span class="error">{{passerror}}</span>
			</div>
			
			<button type="submit" class="bt btn-info">Login</button>
		</form>
			
	</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  beforeRouteEnter (to, from, next) {
	if(window.localStorage.getItem('token'))
		next('/')
	else
		next()
  },
  data () {
	return {
		msg: 'LOGO',
		username: '',
		password: '',
		usernameerror:'',
		passerror:''
	}
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },
	login () {
		if(this.username && this.password)
		{
			this.usernameerror = '';
			this.passerror = '';
			window.localStorage.setItem('token','dummytokenby%20AjitSinghPanesar%20dummytokenvalues');
			this.$router.push('/')
		}
		!this.username ? this.usernameerror = 'Enter valid username.' : this.usernameerror =''
		!this.password ? this.passerror = 'Enter valid password.' : this.passerror = ''
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.formlayout{text-align:center}
	h2{color:#7b7a7a}
</style>
