import React from 'react';
import NavBar from './navbar';
import Footer from './footer';
import Main from './main';

function Home(){
  return(
    <div>
      <NavBar/>  
      <Main/>
      <Footer/>
    </div>
  )
}
  
export default Home;