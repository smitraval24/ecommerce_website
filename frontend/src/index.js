import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./views/login";
import SignUp from "./views/signup";
import SignUpSeller from "./views/signupSeller";
import SignUpCustomer from "./views/signupCustomer";
import AddProduct from "./views/addProduct"
import PageNotFound from './views/pageNotFound';
import Home from "./views/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signupSeller" element={<SignUpSeller/>}/>
    <Route path="/signupCustomer" element={<SignUpCustomer/>}/>
    <Route path='/addProduct' element={<AddProduct/>}/>
    <Route path="*" element={<PageNotFound/>}/>
  </Routes>
  </BrowserRouter>
);