import React, { useState } from 'react';
import axios from "axios";

function SignUp() {

  const initialValues = {
    email:"",
    password:"",
    reenterpassword:"",
    role:""
  }

  const [creds, newUser] = useState(initialValues);

  const submit = async(e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:3030/signup",{
        creds
      })
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = (e) => {
    // console.log(e.target.name)
    newUser({ ...creds, [e.target.name]: e.target.value });
  };

  return(
  <form className="landingForm" action="/signup" method="post">
    <h1 className="heading">SIGNUP</h1>
      <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" name="email" value={creds.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={creds.password} onChange={handleChange}/>
      </div>
      <div className="mb-3">
          <input type="password" className="form-control" id="exampleInputPassword2w" placeholder="Renter the password" name="reenterpassword" value={creds.reenterpassword} onChange={handleChange}/>
      </div>
      <div className="mb-3">
      <select className="form-select" id="role" name="role" value={creds.role} onChange={handleChange} required>
        <option defaultValue hidden>Select Your Role</option>
        <option>Customer</option>
        <option>Seller</option>
      </select>
      </div>
      <button type="submit" className="btn btn-primary submit_button" onClick={submit}>SIGNUP</button>
    </form>

)}
    
export default SignUp;