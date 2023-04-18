//jshint esversion:6
//using modules 
const express = require("express");
var cors = require("cors");
const collections = require("./database");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const Path = require('path');
var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);

commonPath = "C:/PROGRAMMING/";
const publicFolderPath = Path.join(commonPath+"/public");
const viewsFolderPath = Path.join(commonPath+"/src/views");

let app = express();
app.set('view engine','ejs');
app.set('views', viewsFolderPath)
// console.log(viewsFolderPath,publicFolderPath)
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(publicFolderPath));
app.use(cors());

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
      
      await collections.SignupCred.find({$and:[{email:userentered_email}, {password:userentered_password}] })
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
app.get("/signup", cors(), (req,res)=>{
    res.render("signup")
  });
  
app.post("/signup", async(req,res)=>{
      const {creds} = req.body;
      const signup_email = creds.email;
      const signup_pass = creds.password;
      const signup_reenter_pass = creds.reenteredpassword;
      const role = creds.role;
  
      const Value = new collections.SignupCred({email:signup_email, password:signup_pass, repassword:signup_reenter_pass, role:role})

      await collections.SignupCred.find({ email:Value.email })
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
  const sellerInfo = new collections.SignupSellerCred({fname:firstname, lname:lastname, saddress:shopaddress, gstno:gstnumber, mobileno:mobilephoneno})
  await collections.SignupSellerCred.insertMany(sellerInfo).then((value)=>{
      res.redirect("/login")
  }, (error)=>{
    console.log(error);
  })
})

//sigup customer page
app.get("/signupCustomer",(req,res)=>{
  res.render("signupCustomer")
})

app.post("/signupCustomer", async(req,res)=>{
  const fullname = req.body.fullname;
  const mobileno = req.body.mobileno;
  const permanentaddress = req.body.address;

  const customerInfo = new collections.SignupCustomerCred({name:fullname, mobilenumber:mobileno, address:permanentaddress})

  await collections.SignupCustomerCred.insertMany(customerInfo).then((value)=>{
      res.redirect("/login")
  }, (error)=>{
    console.log(error)
  })
})

//add product page
app.get("/addProduct",(req,res)=>{
  res.render("addProduct")
});

app.post("/submitForm", async(req,res)=>{
  const name = req.body.pname;
  const desc = req.body.pdesc;
  const cost = req.body.pcost;

  const productInfo = new collections.productDetials({pname:name, pdesc:desc, pcost:cost})
  await collections.productDetials.insertMany(productInfo).then((value)=>{
      res.redirect("/sender")}, (error)=>{
        console.log(error)
      })
});

//seller page 
app.get("/seller", (req,res)=>{
  res.render("seller")
});

//customer page 
app.get("/customer",(req,res)=>{
  res.render("customer")
});

//product customer page
app.get("/productCustomer",(req,res)=>{
  res.render("productCustomer")
});

//tocheck which port is 3000
app.listen(3030, ()=>{
    console.log("server running on port 3030");
});