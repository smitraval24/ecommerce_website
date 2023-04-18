import React from 'react';
import '../app.css';

function Productlist({product, addToCart}){
    return(<div className='flex'>
        {
            product.map((productItem, productIndex)=>{
                return (
                    <div style={{width: '25%'}}>
                        <div className='product-item'>
                            <img src={productItem.url} width="25%" alt='product'/>
                            <p>{productItem.name} | {productItem.category}</p>
                            <p>{productItem.seller}</p>
                            <p> Rs. {productItem.price} /-</p>
                            <button
                            onClick={() => addToCart(productItem)}
                            className="addtocart-btn" type="submit">Add to cart</button>
                        </div>
                    </div>
                )
            })
        }
    </div>);
}

export default Productlist;