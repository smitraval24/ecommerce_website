import React from 'react';
import { useEffect, useState } from 'react';
import "../app.css";

function Cartlist({cart}){

    const [ CART, setCART] = useState([])

    useEffect(()=>{
        setCART(cart)
    },[cart])

    return(
        <div>
            {
                CART.map((cartItem, cartIndex) => {
                    return(<div>
                        <img src={cartItem.url} width={200} alt='cart'/>
                        <span>{cartItem.name}</span>
                        <button
                            onClick={()=>{
                                const CART2 = CART.map((item, index)=>{
                                    return cartIndex === index ? {  ...item, quantity : item.quantity > 0 ? item.quantity - 1 : 0} : item 
                                })
                                setCART(CART2)
                            }}
                        >-</button>
                        <span>{cartItem.quantity}</span>
                        <button
                            onClick={()=>{
                                const CART2 = CART.map((item, index)=>{
                                    return cartIndex === index ? {  ...item, quantity : item.quantity + 1} : item 
                                })
                                setCART(CART2)
                            }}
                        >+</button>
                        <span>Rs. {cartItem.price * cartItem.quantity}</span>
                    </div>)
                })
            }

            <p>Total : Rs. 
                {
                    CART.map(item => item.price * item.quantity).reduce((total,  value) => total + value, 0)
                }
            </p>
        </div>
    )
}

export default Cartlist;