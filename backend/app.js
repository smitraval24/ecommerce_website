//jshint esversion:6

//importing libraries 
import react from "react"
import ReactDom from "react-dom"
import inputCreation from "input"

//using modules 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);
const mongoose = require('mongoose');
const { result } = require("lodash");
mongoose.set('strictQuery',false);
mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
// console.log(mongoose.connection.readyState);
// 0: disconnected
// 1: connected
// 2: connecting
// 3: disconnecting

let app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req,res)=>{
    res.render("home")
})

//login page
app.get("/login", (req,res)=>{
    res.render("login")
});

app.post("/login",(req,res)=>{
      const userentered_email = req.body.email;
      const userentered_password = req.body.password;
      
      SignupCred.find({$and:[{email:userentered_email}, {password:userentered_password}] }, (err, results) => {
          if(results.length>0){
            res.redirect("/")
          }
          else{
            res.redirect("/login")
          }
        });
})

//signup page
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

app.get("/signup", (req,res)=>{
    res.render("signup")
  });
  
app.post("/signup",(req,res)=>{
      const signup_emial = req.body.email;
      const signup_pass = req.body.password;
      const signup_reenter_pass = req.body.re_entered_password;
      const role = req.body.role;
  
      const Value = new SignupCred({email:signup_emial, password:signup_pass, repassword:signup_reenter_pass, role:role})

      SignupCred.find({ email:Value.email }, function (err, docs) {
       
        if(docs.length>0){
          console.log("user has alreay signup")
          res.redirect("/signup")
        }
        else if (Value.password != Value.repassword){
            console.log("both the password are different")
            res.redirect("/signup")
          }
        else{
          SignupCred.insertMany(Value ,function (err) {
              if(err){
                console.log(err);
              }
              if (Value.role=="Customer"){
                res.redirect("/signupCustomer")
              }
              else{
                res.redirect("/signupSeller")
              }
          });
          }
    });

})

//signup seller page

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

const SignupSellerCred = mongoose.model("signupsellercred", signupSellerCredSchema)

app.get("/signupSeller",(req,res)=>{
  res.render("signupSeller")
})

app.post("/signupSeller",(req,res)=>{
  const firstname = req.body.fname;
  const lastname = req.body.lname;
  const shopaddress = req.body.saddress;
  const gstnumber = req.body.gstno;
  const mobilephoneno = req.body.mobileno;

  console.log(firstname, lastname, shopaddress, gstnumber, mobilephoneno);
  const sellerInfo = new SignupSellerCred({fname:firstname, lname:lastname, saddress:shopaddress, gstno:gstnumber, mobileno:mobilephoneno})
  SignupSellerCred.insertMany(sellerInfo, function(err) {
    if(err){
      console.log(err)
    } else{
      res.redirect("/login")
    }
  })
})

//sigup seller page
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

const SignupCustomerCred = mongoose.model("signupCustomerCred", signupCustomerSchema)

app.get("/signupCustomer",(req,res)=>{
  res.render("signupCustomer")
})

app.post("/signupCustomer",(req,res)=>{
  const fullname = req.body.fullname;
  const mobileno = req.body.mobileno;
  const permanentaddress = req.body.address;

  const customerInfo = new SignupCustomerCred({name:fullname, mobilenumber:mobileno, address:permanentaddress})

  SignupCustomerCred.insertMany(customerInfo, (err)=>{
      if(err){
        console.log(err)
      } else{
        res.redirect("/login")
      }
  })
})

//add product page

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

app.get("/addProduct",(req,res)=>{
  res.render("addProduct")
})

app.post("/submitForm",(req,res)=>{
  const name = req.body.pname;
  const desc = req.body.pdesc;
  const cost = req.body.pcost;

  const productInfo = new productDetials({pname:name, pdesc:desc, pcost:cost})
  productDetials.insertMany(productInfo, (err)=>{
    if(err){
      console.log(err)
    } else{
      res.redirect("/sender")
    }
  })
})

//seller page 
app.get("/seller", (req,res)=>{
  res.render("seller")
})

//customer page 
app.get("/customer",(req,res)=>{
  res.render("customer")
})

//product customer page
app.get("/productCustomer",(req,res)=>{
  res.render("productCustomer")
})

//tocheck which port is 3000
app.listen(3000, ()=>{
    console.log("server running on port 3000");
})