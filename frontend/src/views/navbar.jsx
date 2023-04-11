import React from 'react';

function Header(props){
    return(<header>
          <p className='company-logo'>Company</p>
          <nav>
            <ul>
              <li><a onClick={()=> props.handleShow(false)}>Home</a></li>
              <li><a href=''>Products</a></li>
              <li><a href=''>Contact Us</a></li>
              <li><a onClick={()=> props.handleShow(true)}>Cart<sup> {props.count} </sup></a></li>
            </ul>
            <a href='cart.html' className='cart-logo'>Cart</a>
          </nav>
        </header>);
}

export default Header;