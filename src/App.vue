<template>
  <div id="app">
    <Header />
    <main id="sectionMain">
      <div class="container"> <div class="card mt-4 pb-3"> <router-view /></div></div>
    </main>
    <Footer />
  </div>
</template>
<script>

import Header from "@/layout/Header.vue";
import Footer from "@/layout/Footer.vue";
export default {
  name: "home",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,300,700);
body{
  background: -webkit-linear-gradient(left, #25c481, #25b7c4);
  background: linear-gradient(to right, #25c481, #25b7c4);
  background: #bdc3c7;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #2c3e50, #bdc3c7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  font-family: 'Roboto', sans-serif;
}
section {
	padding: 15px;
}
.modal-open .modal {
	overflow-x: hidden;
	overflow-y: auto;
	display: block;
}

/* follow me template */
.made-with-love {
  margin-top: 40px;
  padding: 10px;
  clear: left;
  text-align: center;
  font-size: 10px;
  font-family: arial;
  color: #fff;
}
.made-with-love i {
  font-style: normal;
  color: #F50057;
  font-size: 14px;
  position: relative;
  top: 2px;
}
.made-with-love a {
  color: #fff;
  text-decoration: none;
}
.made-with-love a:hover {
  text-decoration: underline;
}

.card {
	background-color:transparent!important;
	border: 0 !important;

}
.home .btn-primary {
	color: #fff;
	background-color: #19959b;
	border-color: #178c93;
	-webkit-box-shadow: 3px 4px 0px 0px #577c7d;
	box-shadow: 3px 4px 0px 0px #577c7d;
	padding: 4px 10px;
	font-size: 1.1rem;
	line-height: 17px;
	font-size: 14px;
}

/* for custom scrollbar for webkit browser*/

::-webkit-scrollbar {
    width: 6px;
} 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
} 
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
} 
#sectionMain{
  padding: 0 0 80px 0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
