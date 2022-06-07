<template>
  <div id="app">
  <!-- <section class="vh-100 bg-image image"
  style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDqLkgpp7JhD6xoe0E9aDq_In467f1_7lOk8Ap4_3-Gsul5wfopMVeHWVHDsu_7HRUoo&usqp=CAU');"> -->
    <!-- <nav>
      <router-link id="i1" tag="li" to="/">Register</router-link> 
      <router-link id="i2" tag="li" to="/login">Login</router-link>
    </nav> -->
    <router-view/>
    <!-- </section> -->
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
}
.image{
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;

}

nav a.router-link-exact-active {
  color: azure;
}
nav li{
 color: aqua !important;
  cursor: pointer;
  list-style: none;
  
}
#i1{
    margin-left: -150px;
}
#i2{
    margin-top:-20px ;
    margin-left: 100px;
}
nav li:hover{
  color: blue !important;
  cursor: pointer;
}

</style>
