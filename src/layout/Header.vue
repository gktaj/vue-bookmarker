<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#"><img alt="logo" src="../assets/logo.png" /></a>
    
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li :class="[currentPgItm.includes('/') ? isActive :'', 'nav-item']">
            <router-link to="/" class="nav-link">Home</router-link>

        </li>
        <li :class="[currentPgItm.includes('about') ? isActive :'', 'nav-item']">
                 <router-link to="/about" class="nav-link">About</router-link>
        </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <div class="searchbar">
          <input class="search_input" type="text" name="" placeholder="Search...">
          <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
        </div>
        </form>
    </div>
    </nav>

</template>
<script>
    export default{
        name:"Header",
        data(){
            return{
                isActive:"active"
            }
        },
        computed:{
            currentPgItm(){
                console.log(this.$route.path);
                return this.$route.path;
                
            }
        }

    }
</script>
<style scoped>
/* .bg-light{
background: #141E30; 
background: -webkit-linear-gradient(to top, #243B55, #141E30); 
background: linear-gradient(to top, #243B55, #141E30); 

} */
.navbar-light .navbar-brand img {
    max-width:79px;
}
 .searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
    }

    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:red;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #e74c3c;
    }

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    }
</style>