import React from 'react';
import '../index.css';
import { NavLink } from 'react-router-dom';

function NavBar(props){
    return(<header>
          <p className='company-logo'>Company</p>
          <nav>
            <ul>
              <li><a><NavLink to={"/"}>Home</NavLink></a></li>
              <li><a><NavLink to={"/products"}>Products</NavLink></a></li>
              <li><a><NavLink to={"/cart"}>Cart<sup> {props.count} </sup></NavLink></a></li>
            </ul>
            <a href='cart.html' className='cart-logo'>Cart</a>
          </nav>
        </header>);
}

export default NavBar;