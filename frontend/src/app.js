import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './views/main';
import NavBar from "./views/navbar";
import Footer from './views/footer';
import Productlist from './views/productlist';
import Cartlist from './views/cartlist';
import Login from "./views/login";
import SignUp from "./views/signup";
import AddProduct from "./views/addProduct";
import Home from "./views/home";
import PageNotFound from "./views/pageNotFound";
import SignUpCustomer from "./views/signupCustomer";
import SignUpSeller from "./views/signupSeller";
import { useState } from 'react';

const App = () => {
  const [product, setProduct] = useState([
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
  ])

    const [cart ,setCart] = useState([])

    const [showCart, setshowCart] = useState(false)

    const addToCart = (data) => {
      setCart([...cart, { ...data , quantity: 1}])
    }

    const handleShow = (value) =>{
      setshowCart(value)
    }
  return (
    <>
      <Router>
      <Routes>
      <Route path='/' element={
          <div>
            <NavBar count={cart.length} handleShow={handleShow}/>
            <Main />
            <Footer />
          </div>
        }/>

        <Route path='/products' element={
          <div>
            <NavBar count={cart.length} handleShow={handleShow}/>
            <Productlist product={product} addToCart={addToCart}/>
          </div>}
        />

        <Route path='/cart' element={
          <div>
            <NavBar count={cart.length} handleShow={handleShow}/>
            <Cartlist cart={cart}/>
          </div>}
        />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/add-product" element={<AddProduct />}></Route>
      <Route path="/signup-customer" element={<SignUpCustomer />}></Route>
      <Route path="/signup-seller" element={<SignUpSeller />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  </Router>
    </>
  )
}

export default App;