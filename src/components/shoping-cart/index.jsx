import React from 'react';
import "./style.css"


const Shopcart = () => {

  return (
    <div className='contact-cont'>
      <div className="for-sections-link">
        <h4>Home</h4>
        <span>/</span>
        <h4>Shop</h4>
        <span>/</span>
        <h4 id="shop-list">Shopping Cart</h4>
      </div>
      <div className='container-for-products'>
        <div className='box-buy-products'>
          <div className='header-bar-cont'>
            <h4>Products</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
            <h4>Remove</h4>
          </div>
          <div className='camera-box'></div>
          <div className='shirt-box'></div>
          <div className='lamp-box'></div>
          <div className='nike-box'></div>
          <div className='dron-box'></div>



        </div>
        <div className='box-checkout'></div>
      </div>
    </div>
  )
};

export default Shopcart;