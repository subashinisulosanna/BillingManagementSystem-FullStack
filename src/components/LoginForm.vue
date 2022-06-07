<template>

  <div class="hello">
  <h1>Login</h1>
  <div id="log">
    
     
      <div>        
        <input name="email" id="email" class="com" v-model="email" placeholder="Enter Your Email" type="email" aria-label="1">
      </div>
      
      <div>
        <input name="password" id="password" class="com" v-model="password" type="password" placeholder="Enter the Password" aria-label="1">
      </div>
           
      
      <button id="i2" class="register com" @click.prevent="login">Login</button>
    
    </div>
    <div id="myimage">
        <img src="https://www.dynodesoft.com/assets/img/4671c6bfaa611757647e91a3aca2ba4f.gif" alt="Paris" width="700" height="450">
 </div>
  </div>
</template>

<script>



export default {
  name: 'LoginForm',
  props: {
    msg: String
  },
  
  data(){
      return{
          email:"",
          password:""
      }
  },
   methods: {
    login(){
        alert("kh")
         
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

    localStorage.setItem('EMAIL', email);
    localStorage.setItem('PASSWORD', password);

 var obj= {"values":[email,password]
 
    
}
  console.log(obj);
      
const response=this.$http.post("http://localhost:8000/logincheck",obj).then(
    function(data)
    {
        alert("login succesfully")
        console.log(data);
        console.log(data.body.result.login);
        if(data.body.result.login=="success")
        {
            console.log("success wow!");
            this.$router.push({name:'home'})
        }
        else{
            alert("Invalid credentials");
            this.$router.push({name:'login'})
            this.email="";
            this.password="";

        }
    }
)
console.log(response)
console.log(response.login)

     }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->



<style scoped>
.image{
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
#log{
    margin-left: -500px;
    margin-top:80px;
}
img{
    
  margin-top:-450px;
  margin-left:400px;
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
}

.com{
    margin: 20px;
    width: 300px;
    height: 10px;
    padding: 20px;
    border: 1px solid aqua;
}
.register{
    width: 300px;
    background-color: rgb(30, 0, 255);
    color: antiquewhite;
    font-weight: bold;
    padding-bottom: 30px;
    font-size: 15px;
    margin-bottom:150px ;
    cursor:pointer;
    border:1px solid aqua;
}
.register:hover{
    background-color: aqua;
    border:1px solid blue;
}
h1{
    color:blue;
    font-weight: bold;
    font-size: 30px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    margin-bottom: -50px;
}

#email{
    margin-top: 80px;
}
#i2{
    list-style: none;
    
}

</style>
