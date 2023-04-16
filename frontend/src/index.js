import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/login";
import SignUp from "./views/signup";
import AddProduct from "./views/addProduct";
import Home from "./views/home";
import PageNotFound from "./views/pageNotFound";
import SignUpCustomer from "./views/signupCustomer";
import SignUpSeller from "./views/signupSeller";

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  // <div>hello smit raval is here</div>
  <React.StrictMode>
  <Router>
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/addProduct" element={<AddProduct />}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pagenotfound" element={<PageNotFound />}></Route>
      <Route path="/signup-customer" element={<SignUpCustomer />}></Route>
      <Route path="/signup-seller" element={<SignUpSeller />}></Route>
    </Routes>
  </Router>
  </React.StrictMode>
);