//jshint esversion:6
//using modules 
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const Path = require('path');
var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);
const mongoose = require('mongoose');
// console.log(mongoose.connection.readyState);
// 0: disconnected
// 1: connected
// 2: connecting
// 3: disconnecting
commonPath = "C:/PROGRAMMING/";
const publicFolderPath = Path.join(commonPath+"/public");
const viewsFolderPath = Path.join(commonPath+"/src/views");

 
let app = express();
app.set('view engine','ejs');
app.set('views', viewsFolderPath)
// console.log(viewsFolderPath,publicFolderPath)
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(publicFolderPath));
mongoose.set('strictQuery',false);
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce')
.then(()=>{
    console.log("monogdb connected")
})
.catch(()=>{
    console.log("failed to connect")
})

app.get("/", (req,res)=>{
    res.render("home")
})

//login page
app.get("/login", (req,res)=>{
    res.render("login")
});

app.post("/login", async(req,res)=>{
      const userentered_email = req.body.email;
      const userentered_password = req.body.password;
      
      await SignupCred.find({$and:[{email:userentered_email}, {password:userentered_password}] })
      .then((result)=>{
        if (result.length>0) {
            res.redirect("/")
          }
          else{
            res.redirect("/login")
          }
      })
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
  
app.post("/signup", async(req,res)=>{
      const signup_emial = req.body.email;
      const signup_pass = req.body.password;
      const signup_reenter_pass = req.body.re_entered_password;
      const role = req.body.role;
  
      const Value = new SignupCred({email:signup_emial, password:signup_pass, repassword:signup_reenter_pass, role:role})

      await SignupCred.find({ email:Value.email })
      .then((value)=>{
        if(value.length>0){
          console.log("user has alreay signup")
          res.redirect("/signup")
        }
        else if (value.password != value.repassword){
            console.log("both the password are different")
            res.redirect("/signup")
          }
        // else{
          // SignupCred.insertMany(value).then((values)=>{
          //   if (values.role=="Customer"){
          //     res.redirect("/signupCustomer")
          //   }
          //   else{
          //     res.redirect("/signupSeller")
          //   }
          // }, (error)=>{
          //   console.log(error)})
          // }
      })
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

app.post("/signupSeller", async(req,res)=>{
  const firstname = req.body.fname;
  const lastname = req.body.lname;
  const shopaddress = req.body.saddress;
  const gstnumber = req.body.gstno;
  const mobilephoneno = req.body.mobileno;

  console.log(firstname, lastname, shopaddress, gstnumber, mobilephoneno);
  const sellerInfo = new SignupSellerCred({fname:firstname, lname:lastname, saddress:shopaddress, gstno:gstnumber, mobileno:mobilephoneno})
  await SignupSellerCred.insertMany(sellerInfo).then((value)=>{
      res.redirect("/login")
  }, (error)=>{
    console.log(error);
  })
})

//sigup customer page
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

app.post("/signupCustomer", async(req,res)=>{
  const fullname = req.body.fullname;
  const mobileno = req.body.mobileno;
  const permanentaddress = req.body.address;

  const customerInfo = new SignupCustomerCred({name:fullname, mobilenumber:mobileno, address:permanentaddress})

  await SignupCustomerCred.insertMany(customerInfo).then((value)=>{
      res.redirect("/login")
  }, (error)=>{
    console.log(error)
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

app.post("/submitForm", async(req,res)=>{
  const name = req.body.pname;
  const desc = req.body.pdesc;
  const cost = req.body.pcost;

  const productInfo = new productDetials({pname:name, pdesc:desc, pcost:cost})
  await productDetials.insertMany(productInfo).then((value)=>{
      res.redirect("/sender")}, (error)=>{
        console.log(error)
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
app.listen(3030, ()=>{
    console.log("server running on port 3000");
})