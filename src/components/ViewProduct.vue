<template>
  <div id="app">
  <h1>View Product</h1>
<div id="reg">
       
    
      
      <div>
        
        <input name="id" class="email com e" type="email" id="id" v-model="productid" placeholder="Product Id" aria-label="1" @change="search" required>
      </div>
      <div>
        <input name="name" id="name" type="text" v-model="name" class="com email e" placeholder="Product Name" aria-label="1" required readonly>
      </div>
      <div>
        <input name="price" id="password" type="text" v-model="price" class="com email e" placeholder="Product Price" aria-label="1" required readonly>
      </div>
      <div>
        <input name="description" id="repassword" type="text" v-model="description" class="com email e" placeholder="Description" aria-label="1" required readonly>
      </div>

       <button type="button" id="register" class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body register" @click.prevent="register">View</button>
      
    
   
  </div>
  <div id="myimage">
        <img src="https://cdn.dribbble.com/users/282923/screenshots/11050247/paymentsbilling.gif" alt="Paris" width="700" height="450">
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
           id:"",
      name:"",
      price:"",
      description:"",
      
    };
    },
    methods: {
        
        search(){
            //alert("hi this is search function")
            const id = document.getElementById('id').value;
            var obj={
                "values":[id]
            }
            const response=this.$http.post("http://localhost:8000/search",obj).then(
    function(data)
    {
        console.log(data);
        console.log(data.body.result.login);
        if(data.body.result.login=="success")
        {
            //alert("success");
            console.log("success wow!");
            this.name=data.body.strval.items[1];
            this.price=data.body.strval.items[2];
            this.description=data.body.strval.items[3];
            
        }
        else
        {
            alert("Product id does not exist");
            this.$router.push({name:'viewproduct'});

        }
    }
)
console.log(response);

        },
    register(){
        const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const cpassword=document.getElementById('repassword').value;
         
  if(cpassword==password){
  
 var obj= {"values":[name,email,password]
    
}
var obj1={
    "values":[this.name,this.email,this.password]
}
  console.log(obj1+" "+cpassword);
      
const response=this.$http.post("http://localhost:8000/login",obj).then(
    function(data)
    {
        console.log(data);
        console.log(data.body.result.login);
        if(data.body.result.login=="success")
        {
            console.log("success wow!");
            this.$router.push({name:'login'})
        }
    }
)
console.log(response)
console.log(response.login)

     }
     else{
         alert("Passwords are mismatched");
         this.name="",
         this.password="",
         this.email="",
         this.cpassword="",
         this.$router.push({name:'register'})
         
     }
    }
    }
}


</script>

<style scoped>
.image{
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
.e{
    color: rgb(0, 132, 255) !important;
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
    color: antiquewhite;
}
h1{
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
.email{
    color: white;
    font-weight: bold;
    background-color: rgb(109, 209, 178);
}

</style>
