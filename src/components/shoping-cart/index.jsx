import React from 'react';
import "./style.css"
import nikon from "..//..//assets/icons/nikon.jpg";
import blueshirt from "..//..//assets/icons/blueshirt.jpg"
import lamp from "..//..//assets/icons/night lamp.jpg"
import { useState } from 'react';
import nike from "..//..//assets/icons/nikeshoes.jpg"
import dron from "..//..//assets/icons/dron.jpg"

const Shopcart = () => {
  const [get, set] = useState(1)

  const foo = () => {
    set(get + 1)
  }

  const foo1 = () => {
    if (get !== 0) {
      set(get - 1)
    }
  }


  return (
    <div className='contact-cont'>
      <div className="for-sections-link">
        <h4>Home</h4>
        <span>/</span>
        <h4>Shop</h4>
        <span>/</span>
        <h4 id="shop-list">Shopping Cart</h4>
      </div>
      <div className='container-products-g'>
        <div className='box-buy-products'>
          <div className='header-bar-cont'>
            <h4>Products</h4>
            <h4>Price</h4>
            <h4>Quantity</h4>
            <h4>Total</h4>
            <h4>Remove</h4>
          </div>
          <div className='camera-box'>
            <div className='name-product'>
              <img src={nikon} alt="#" />
              <h4>Product Name</h4>
            </div>
            <div className='box-price'>
              <p>$150</p>
            </div>
            <div className='for-quanity'>
              <div className="for-payments-quality">
                <button className='function-btn' onClick={foo1}>-</button>
                <button id="value-qnt">{get}</button>
                <button className='function-btn' onClick={foo}>+</button>
              </div>
            </div>
            <div className='total-price'>
              <p>$150</p>
            </div>
            <div className='remove-btn'>
              <button>✖</button>
            </div>
          </div>
          <div className='shirt-box'>
            <div className='name-product'>
              <img src={blueshirt} alt="#" />
              <h4>Product Name</h4>
            </div>
            <div className='box-price'>
              <p>$150</p>
            </div>
            <div className='for-quanity'>
              <div className="for-payments-quality">
                <button className='function-btn' onClick={foo1}>-</button>
                <button id="value-qnt">{get}</button>
                <button className='function-btn' onClick={foo}>+</button>
              </div>
            </div>
            <div className='total-price'>
              <p>$150</p>
            </div>
            <div className='remove-btn'>
              <button>✖</button>
            </div>
          </div>
          <div className='lamp-box'>
            <div className='name-product'>
              <img src={lamp} alt="#" />
              <h4>Product Name</h4>
            </div>
            <div className='box-price'>
              <p>$150</p>
            </div>
            <div className='for-quanity'>
              <div className="for-payments-quality">
                <button className='function-btn' onClick={foo1}>-</button>
                <button id="value-qnt">{get}</button>
                <button className='function-btn' onClick={foo}>+</button>
              </div>
            </div>
            <div className='total-price'>
              <p>$150</p>
            </div>
            <div className='remove-btn'>
              <button>✖</button>
            </div>
          </div>
          <div className='nike-box'>
            <div className='name-product'>
              <img src={nike} alt="#" />
              <h4>Product Name</h4>
            </div>
            <div className='box-price'>
              <p>$150</p>
            </div>
            <div className='for-quanity'>
              <div className="for-payments-quality">
                <button className='function-btn' onClick={foo1}>-</button>
                <button id="value-qnt">{get}</button>
                <button className='function-btn' onClick={foo}>+</button>
              </div>
            </div>
            <div className='total-price'>
              <p>$150</p>
            </div>
            <div className='remove-btn'>
              <button>✖</button>
            </div>
          </div>
          <div className='dron-box'>
            <div className='name-product'>
              <img src={dron} alt="#" />
              <h4>Product Name</h4>
            </div>
            <div className='box-price'>
              <p>$150</p>
            </div>
            <div className='for-quanity'>
              <div className="for-payments-quality">
                <button className='function-btn' onClick={foo1}>-</button>
                <button id="value-qnt">{get}</button>
                <button className='function-btn' onClick={foo}>+</button>
              </div>
            </div>
            <div className='total-price'>
              <p>$150</p>
            </div>
            <div className='remove-btn'>
              <button>✖</button>
            </div>
          </div>

        </div>
        {/* ==================================================== */}
        <div className='box-checkout'>
          <div className='box-cupon-input'>
            <label>
              <input type="text" placeholder='Coupon Code' />
              <button>Apply Coupon</button>
            </label>
          </div>
          <h2>CART SUMMARY------------------------------</h2>
          <div className='cont-checkout'>
            <div className='box-topic-checkout'>

              <div className='Subtotal-box'>
                <h4>Subtotal</h4>
                <p>$150</p>
              </div>
              <div className='Subtotal-box'>
                <h4>Shipping</h4>
                <p>$10</p>
              </div>
              -------------------------------------------------------------
              <div className='Subtotal-box'>
                <h4>Total</h4>
                <p>$160</p>
              </div>
              <button>Processed To Checkout</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Shopcart;