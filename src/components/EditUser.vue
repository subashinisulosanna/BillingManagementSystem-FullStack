<template>
  <div id="app">
  <h1>Edit User</h1>
<div id="reg">
       
    
      
      <div>
        
        <input name="email" id="email" type="email" v-model="email" class="com" placeholder="Enter Your Email" aria-label="1" required readonly>
      </div>
      <div>
        <input name="username" id="name" type="text" v-model="name" class="com" placeholder="Edit Your Name" aria-label="1" required>
      </div>
      <div>
        <input name="password" id="password" type="text" v-model="password" class="com" placeholder="Edit your Password" aria-label="1" required>
      </div>
     

       <button type="button" id="register" class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body register" @click.prevent="edit">Update</button>
      
    
   
  </div>
  <div id="myimage">
        <img src="https://cdn.dribbble.com/users/1706228/screenshots/6608869/ams-3-medical-billing.gif" alt="Paris" width="700" height="450">
        </div>
 
     </div>
  
</template>



<script >

import VueResource from 'vue-resource';

import Vue from 'vue';
Vue.use(VueResource)
  
export default {
  name: 'EditUser',
  props: {
msg:String,


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
      name: "",
      email:localStorage.getItem('EMAIL'),
      password:localStorage.getItem('PASSWORD'),
      cpassword:""
    };
    },
    methods: {
    edit(){
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

      
const response=this.$http.post("http://localhost:8000/edit",obj).then(
    function(data)
    {
        alert("Updated successfully!");
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
    
    margin-left:480px;
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
    margin-right:200px;
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
    color:blue;
    font-weight: bold;
    font-size: 30px;
    margin-left:200px;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.com{
    margin: 20px;
    width: 300px;
    height: 10px;
    padding: 20px;
    border: 1px solid aqua;
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
    margin-left: -100px;
    cursor:pointer;

}
#hover:hover{
    color:blue;
    font-weight: bold;
}
#email{
    color: white;
    font-weight: bold;
    background-color: rgb(109, 209, 178);
}

</style>
