import React from 'react';

function SignUp() {
  return(
  <div class="container">
  <form class="login_form" action="/signup" method="post">
    <h1 class="heading">SIGNUP</h1>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" name="email" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="password" />
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword2" class="form-label">Renter the password</label>
          <input type="password" class="form-control" id="exampleInputPassword2w" placeholder="Renter the password" name="re_entered_password" />
      </div>
      <div class="mb-3">
        <label for="role">Select your Role</label>
      <select class="form-select" id="role" name="role">
        <option>Customer</option>
        <option>Seller</option>
      </select>
      </div>
      <button type="submit" class="btn btn-primary submit_button">SIGNUP</button>
    </form>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
</div>
)}
    
export default SignUp;