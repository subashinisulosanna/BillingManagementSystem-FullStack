<!-- https://www.jomsoft.com/wp-content/uploads/2018/12/Utility-Billing-System.gif -->
<template>
  <div id="app">
  <h1>Billing</h1>
<div id="reg">
       
    
      
      <div class="co">
        
        <input name="email" id="id" class="email com e co" type="email" @change="search" v-model="productid" placeholder="Product Id" aria-label="1" required>
        <button id="add" @click="add">Add</button>
      </div>
      <div>
        <input name="username" id="name" type="text" v-model="name" class="com email e" placeholder="Product Name" aria-label="1" required readonly>
      </div>
      <div>
        <input name="password" id="password" type="text" v-model="price" class="com email e" placeholder="Product Price" aria-label="1" required readonly>
      </div>
      <div>
        <input name="repassword" id="repassword" type="number" v-model="total" class="com email e total" placeholder="Total price" aria-label="1" required readonly>
        <input name="repassword" id="repassword" type="number" v-model="amount" class="com email e amount" placeholder="Enter the amount" aria-label="1" required @change="calculate">
      </div>

       <button type="button" id="register" class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body register" @click="print">Print</button>
      
    
   
  </div>
  <div id="myimage">
        <img v-bind:src="image" alt="." v-bind:width="width" v-bind:height="height">
        </div>
 <p id="rs"></p>
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
           productid:"",
      name:"",
      price:"",
      description:"",
      total:0,
      amount:"",
      image:"https://www.jomsoft.com/wp-content/uploads/2018/12/Utility-Billing-System.gif",
      width:700,
      height:450
    };
    },
    methods: {
        oneclick(){
            this.width=100;
            this.height=100;
            alert("bill generating...");  
            window.print();
            this.width=700;
            this.height=450;
        },
        calculate(){
            var total=this.amount-this.total;
            if(total>=0){
            document.getElementById('rs').innerText="Return amount "+total;
            }
            else{
                let tot=this.total-this.amount;
                document.getElementById('rs').innerText="you should give "+tot;
            }
        },
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
            this.total=this.total+data.body.strval.items[2];
        }
        else
        {
            alert("Product id does not exist");
            //this.$router.push({name:'viewproduct'});

        }
    }
)
console.log(response);

        },
        print(){    
            window.print();
        },
        add(){
            alert("add button clicked");

        },
        once(){

        },
    
    }
}


</script>

<style scoped>
.image{
    background-repeat: no-repeat;
    background-size: 100% 100%;

}
.co{
    margin-left:40px;
}
.e{
    color: rgb(0, 132, 255) !important;
}
#rs{
    font-weight: bold;
    font-size: 15px;
    margin-left: 1000px;
    margin-top:380px;
    color: blue;
}
.total{
    width:80px !important;
    margin-right: -20px;
    margin-left: 50px;
}
.amount{
    margin-left:-20px;
    width:150px !important;
}
#add{
    margin-left:10px;
    height: 30px;
    width: 50px;
    background-color: rgb(193, 231, 231);
    border:1px solid green;
    font-weight: bold;
    color: blue;
    cursor: pointer;
}
#add:hover{
    background-color: rgb(195, 157, 231);
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
@media print {
      /*use your CSS over here customize your prints components.*/
      ::v-deep .right-sidebar,
      ::v-deep header {
      display: none !important;
      }
     ::v-deep footer {
     display: none !important;
     }
}

</style>
