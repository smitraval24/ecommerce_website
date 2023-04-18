import React from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

function NavBar(props){
    return(<header>
          <p className='company-logo'>Company</p>
          <nav>
            <ul>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/products"}>Products</NavLink></li>
              <li><NavLink to={"/cart"}>Cart<sup> {props.count} </sup></NavLink></li>
            </ul>
            <a href='cart.html' className='cart-logo'>Cart</a>
          </nav>
        </header>);
}

export default NavBar;