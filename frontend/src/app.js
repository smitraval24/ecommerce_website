import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import SignUp from "./views/signup";
import AddProduct from "./views/addProduct";
import Home from "./views/home";
import PageNotFound from "./views/pageNotFound";
import SignUpCustomer from "./views/signupCustomer";
import SignUpSeller from "./views/signupSeller";

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/addProduct" element={<AddProduct />}></Route>
      <Route path="/signup-customer" element={<SignUpCustomer />}></Route>
      <Route path="/signup-seller" element={<SignUpSeller />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  </Router>
    </div>
  )
}

export default App;
