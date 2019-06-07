<template>
  <div class="container-fluid">    
    <div class="row">
      <div class="col-12 text-center">
        <h1>404 Error Page</h1>
        <p class="zoom-area">Page not found</p>
        <section class="error-container">
          <span>4</span>
          <span><span class="screen-reader-text">0</span></span>
          <span>4</span>
        </section>        
      </div>
    </div>      
  </div>
</template>

<script>
export default {
  name: 'PageNotDefine',
  data () {
	return {
		msg: 'PageNotDefine'
	}
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
.error-container {text-align: center; font-size: 180px; font-weight: 800;margin: 20px 15px; }
.error-container > span { display: inline-block; line-height: 0.7; position: relative; color: #FFB485; }
.error-container > span { display: inline-block; position: relative; vertical-align: middle; }
.error-container > span:nth-of-type(1) { color: #D1F2A5; animation: colordancing 4s infinite; }
.error-container > span:nth-of-type(3) { color: #F56991; animation: colordancing2 4s infinite; }
.error-container > span:nth-of-type(2) { width: 120px; height: 120px; border-radius: 999px; }
.error-container > span:nth-of-type(2):before,
.error-container > span:nth-of-type(2):after {
	border-radius: 0%; content:""; position: absolute; top: 0; left: 0; width: inherit; height: inherit; border-radius: 999px;
	box-shadow: inset 30px 0 0 rgba(209, 242, 165, 1),
				inset 0 30px 0 rgba(239, 250, 180, 1),
				inset -30px 0 0 rgba(255, 196, 140, 1),	
				inset 0 -30px 0 rgba(245, 105, 145, 1);
  animation: shadowsdancing 4s infinite;
}
.error-container > span:nth-of-type(2):before {
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	transform: rotate(45deg);
}

.screen-reader-text {
    position: absolute;
    top: -9999em;
    left: -9999em;
}
@keyframes shadowsdancing {
  0% {
    box-shadow: inset 30px 0 0 rgb(165, 173, 242),
				inset 0 30px 0 rgba(239, 250, 180,1),
				inset -30px 0 0 rgba(255, 196, 140,1),	
				inset 0 -30px 0 rgba(245, 105, 145,1);
  }
  25% {
    box-shadow: inset 30px 0 0 rgba(245, 105, 145, 0.4),
				inset 0 30px 0 rgba(209, 242, 165, 0.4),
				inset -30px 0 0 rgba(239, 250, 180, 0.4),	
				inset 0 -30px 0 rgba(255, 196, 140, 0.4);
  }
  50% {
     box-shadow: inset 30px 0 0 rgba(255, 196, 140, 0.4),
				inset 0 30px 0 rgba(245, 105, 145, 0.4),
				inset -30px 0 0 rgba(209, 242, 165, 0.4),	
				inset 0 -30px 0 rgba(239, 250, 180, 0.4);
  }
  75% {
   box-shadow: inset 30px 0 0 rgba(239, 250, 180, 0.4),
				inset 0 30px 0 rgba(255, 196, 140, 0.4),
				inset -30px 0 0 rgba(245, 105, 145, 0.4),	
				inset 0 -30px 0 rgba(209, 242, 165, 0.4);
  }
  100% {
    box-shadow: inset 30px 0 0 rgba(209, 242, 165, 0.4),
				inset 0 30px 0 rgba(239, 250, 180, 0.4),
				inset -30px 0 0 rgba(255, 196, 140, 0.4),	
				inset 0 -30px 0 rgba(245, 105, 145, 0.4);
  }
}
@keyframes colordancing {
  0% { color: rgb(122, 212, 5); }
  25% { color: rgb(224, 6, 68); }
  50% { color: rgb(206, 102, 5); }
  75% { color: rgb(172, 202, 3); }
  100% { color: rgb(119, 206, 6); }
}
@keyframes colordancing2 {
  0% { color: rgb(233, 115, 5); }
  25% { color: rgb(191, 224, 2); } 
  50% { color: rgb(122, 212, 3); }
  75% { color: rgb(211, 4, 62); }
  100% { color: rgb(209, 103, 3); }
}

</style>
