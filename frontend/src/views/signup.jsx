import React from 'react';

function SignUp() {
  return(
  <form className="landingForm" action="/signup" method="post">
    <h1 className="heading">SIGNUP</h1>
      <div className="mb-3">
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" name="email" />
      </div>
      <div className="mb-3">
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" />
      </div>
      <div className="mb-3">
          <input type="password" className="form-control" id="exampleInputPassword2w" placeholder="Renter the password" name="re_entered_password" />
      </div>
      <div className="mb-3">
      <select className="form-select" id="role" name="role" required>w
        <option>Seller</option>
      </select>
      </div>
      <button type="submit" className="btn btn-primary submit_button">SIGNUP</button>
    </form>

)}
    
export default SignUp;