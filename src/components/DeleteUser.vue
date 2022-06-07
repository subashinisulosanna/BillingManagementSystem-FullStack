<!-- https://www.mohitecommerce.com/wp-content/uploads/2020/05/how-to-delete-amazon-seller-account.gif -->

<template>
  <div id="app">
  
<div id="reg">
  <h1>Delete User</h1>     
    
      
      <div>





        
        <input name="email" id="email" class="email com" type="email" v-model="email" placeholder="Enter Your Email" aria-label="1" required readonly>
      </div>
      <div>
        <input name="username" class="email com" id="name" type="text" v-model="name" placeholder="Edit Your Name" aria-label="1" required readonly>
      </div>
      <div>
        <input name="password" class="email com" id="password" type="text" v-model="password" placeholder="Edit your Password" aria-label="1" required readonly>
      </div>
      <div id="del">
      <p id="p">Do you really want to delete your account? <span id="hover"><router-link id="i1" @click.prevent="deleted" tag="li" to="/" >Delete</router-link></span> </p>
      </div>
    
   
  </div>
  <div id="myimage">
        <img src="https://www.mohitecommerce.com/wp-content/uploads/2020/05/how-to-delete-amazon-seller-account.gif" alt="Paris" width="700" height="450">
        </div>
 
     </div>
  
</template>



<script >

import VueResource from 'vue-resource';
import Vue from 'vue';
Vue.use(VueResource)
  
export default {
  name: 'RegisterForm',
  props: {
    msg: String
  },
mounted() {
     const email = localStorage.getItem('EMAIL');
    const password = localStorage.getItem('PASSWORD');
    console.log(email);
    console.log(password);
    document.getElementById('email').value = email;

    document.getElementById('password').value = password;
    const obj={"values":[email,password]}

    const response=this.$http.post("http://localhost:8000/setvalues",obj).then(
    function(data)
    {
        var val=data.body.result.login;
        console.log(val.slice(1,val.length-1));
        document.getElementById('name').value=val.slice(1,val.length-1);

        console.log(data);
        console.log(data.body.result.login);
        if(data.body.result.login=="success")
        {
            console.log("success wow!");
            this.$router.push({name:'login'})
        }
    }
    
)

console.log(response);



     
//   axios.get("https://jsonplaceholder.typicode.com/todos/")
//     .then(response => console.log(response+" "+"hello"))
//     .catch(err => {
//         alert(err);
//        // Manage the state of the application if the request 
//        // has failed      
//      })
},
data() {
       return {
      name:"",
      email:"suba@gmail.com",
      password:"",
      cpassword:""
    };
    },
    methods: {
    deleted(){
    //        const email = localStorage.getItem('EMAIL');
    // const password = localStorage.getItem('PASSWORD');
    // console.log(email);
    // console.log(password);
    // document.getElementById('email').value = email;
    // document.getElementById('password').value = password;
        const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
 
 var obj= {"values":[email,name,password]
    
}

      
const response=this.$http.post("http://localhost:8000/deleted",obj).then(
    function(data)
    {
        alert("Deleted successfully!");
        this.$router.push({name:'home'})
        console.log(data);
        console.log(data.body.result.login);
        if(data.body.result.login=="success")
        {
            console.log("success wow!");
            // this.$router.push({name:'login'})
        }
    }
)
console.log(response)
console.log(response.login)

    }}
}



</script>

<style scoped>
.image{
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
#reg{
    margin-top:100px;
    margin-left:480px;
}
#del{
    margin-left: 150px;
    margin-top: 50px;
}
img{
    
  margin-top:-480px;
  margin-left: -100px;
  display: block;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-repeat: no-repeat;
  padding-left: 180px;
    background-repeat: no-repeat;
    margin-bottom: -500px;
}
#myimage{
    margin-top:70px;
}
.head1{
    margin-top: -15px;
    font-size: 25px;
    font-weight: bold;
    
}
.name{
    margin-top: -30px;
}
.register{
    margin-top: -20px;
}

.login{
    margin-top: 15px !important;
}

#checkbox{
    margin-left: -330px;
}
input::placeholder{
    font-size: 15px;
}
h1{

    margin-left: 20px;
    color:blue;
    font-weight: bold;
    font-size: 30px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.com{
    margin: 20px;
    width: 300px;
    height: 10px;
    padding: 20px;
    border: 1px solid rgb(0, 128, 255);
}
#register{
    width: 300px;
    background-color: rgb(30, 0, 255);
    color: antiquewhite;
    font-weight: bold;
    padding-bottom: 10px;
    font-size: 15px;
    cursor:pointer;
    margin-top:25px;
    padding-top:10px;
    margin-bottom:30px;
    border:1px solid aqua;
}
#register:hover{
    background-color: aqua;
    border:1px solid blue;
}
#i1{
    list-style: none;
    margin-top: -20px;
    margin-left:250px;
    text-decoration: underline;
    
    
}
#p{
    margin-top: -10px;
    margin-left: 350px;
    cursor:pointer;

}
#hover{
    margin-left: 120px;
}
#hover:hover{


    color:blue;
    font-weight: bold;
}
.email{
    color: white;
    font-weight: bold;
    background-color: rgb(109, 209, 178);
}
#p{
    margin-top: -10px;
    margin-left: -100px;
    cursor:pointer;

}
#hover:hover{
    color:blue;
    font-weight: bold;
}


</style>

