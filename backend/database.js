const mongoose = require('mongoose');
// console.log(mongoose.connection.readyState);
// 0: disconnected
// 1: connected
// 2: connecting
// 3: disconnecting

mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
.then(()=>{
    console.log("monogdb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

const signupSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    repassword:{
      type:String,
      required: true
    },
    role:{
      type:String,
      required: true
    }
  }); 
  
const SignupCred = mongoose.model("SignupCred", signupSchema);  

const signupSellerCredSchema = new mongoose.Schema({
    fname:{
      type:String,
      required: true
    },
    lname:{
      type:String,
      required: true
    },
    saddress:{
      type:String,
      required: true
    },
    gstno:{
      type:String,
      required: true
    },
    mobileno:{
      type: Number,
      required: true
    }
  })
  
const SignupSellerCred = mongoose.model("signupsellercred", signupSellerCredSchema);

const signupCustomerSchema = new mongoose.Schema({
    name:{
      type: String,
      required: true    
    },
    mobilenumber:{
      type: Number,
      required: true
    },
    address:{
      type: String,
      required: true
    }
  })
  
const SignupCustomerCred = mongoose.model("signupCustomerCred", signupCustomerSchema);

const productDetialsSchema = new mongoose.Schema({
    pname:{
      type: String,
      required: true
    },
    pdesc:{
      type: String,
      required: true
    },
    pcost:{
      type: String,
      required: true
    }
  })
  
const productDetials = mongoose.model("productDetail", productDetialsSchema);

module.exports = {SignupCred, SignupCustomerCred, SignupSellerCred, productDetials}