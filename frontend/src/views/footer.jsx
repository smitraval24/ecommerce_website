import React from 'react';
import '../index.css';

function Footer(){
    return(
    <footer>
          <ul className='footer-dev-links'>
            <li><a href="">Om Patel</a></li>
            <li><a href="">Smit Raval</a></li>
            <li><a href="">Stavan Shah</a></li>
          </ul>
          <ul className='footer-places'>
            <li>Gujarat</li>
            <li>Ahmedabad</li>
            <li>Gandhinagar</li>
          </ul>
    </footer>
    );
}

export default Footer;