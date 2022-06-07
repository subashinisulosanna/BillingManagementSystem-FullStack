<template>

<div id="home">
<h1>BILLING MANAGEMENT SYSTEM</h1>
<div id="frst">
 <router-link id="i" to="/edituser"><input type="submit" value="Edit User" aria-label="1"></router-link>
 <router-link id="i" to="/deleteuser"><input type="submit" value="Delete User" aria-label="1"></router-link>
 <router-link id="i" to="/viewproduct"><input type="submit" value="View Product" aria-label="1"></router-link>
 <router-link id="i" to="/billing"><input type="submit" value="Billing" aria-label="1"></router-link>
 <router-link id="i" to="/login"><input type="submit" value="Exit" aria-label="1"></router-link>
 </div>
 <div id="myimage">
        <img src="https://www.webpos.in/images/resource/restaurant-billing-software-in-chennai.gif" alt="Paris" width="800" height="500">
 </div>
</div>
</template>
<script>
export default{
    name:'HomeView',
}
</script>
<style scoped>
h1{
    color:blue;
    font-weight: bold;
    font-size: 30px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-bottom: 100px;
}
#frst{
    margin-left:100px;
}

img{
    
  margin-top:-400px;
  margin-left:500px;
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-repeat: no-repeat;
  width: 500px; /* Width of new image */
  height: 400px; /* Height of new image */
  padding-left: 180px; /* Equal to width of new image */

    background-repeat: no-repeat;
    margin-bottom: -500px;
}
#i{
    text-decoration: none;
}
input{
    width:300px;
    height:40px;
    padding-left:20px;
    display:block;
    margin-bottom: 30px;
    margin-right: auto;
    
    border: 1px solid skyblue;
    cursor: pointer;
    font-weight: bold;
}
input:hover{
    /* color: antiquewhite; */
    background-color: aquamarine;
    border: 1px solid blue;
    font-weight: bold;
    color: blue;
}
</style>