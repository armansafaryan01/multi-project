import React from 'react';
import "./style.css"


const Checkout = () => {

  return (
    <div className='checkout-cont'>
        <div className="for-sections-link">
        <h4>Home</h4>
        <span>/</span>
        <h4>Shop</h4>
        <span>/</span>
        <h4 id="shop-list">Checkout</h4>
      </div>
      
      <div className='billing-container'>
        <div className='billing-addres'>
        <h4>BILLING ADDRESS--------------------------------------------------------------------------------------------------------------------------</h4>
        </div>
        <div className='account-box'>
          <div className='boxes-create-acc'></div>
          <div className='boxes-create-acc'></div>
        </div>
      </div>
      <div className='order-container'></div>
    </div>
  )
};

export default Checkout;