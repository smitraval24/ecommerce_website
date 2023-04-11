import React from 'react';
import NavBar from './navbar';
import Footer from './footer';

function Home(){
  return(
    <div>
      <NavBar/>  
      <Footer/>
    </div>
  )
}
  
export default Home;
    {/* <script>
    function opencart(){
      var carta = document.getElementById("cart-area");
      if(carta.style.display==="none"){
          carta.style.display="block";
      }else{
          carta.style.display="none";
      }
    }
    </script> */}

