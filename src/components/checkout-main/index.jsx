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
          <div className='boxes-create-acc'>
            <div className='input-field'>
              <h2>First Name</h2>
              <label>
                <input type="text" name='firstname' placeholder='John' />
              </label>
            </div>
            <div className='input-field'>
              <h2>E-mail</h2>
              <label>
                <input type="text" name='email' placeholder='Exapmle@mail.com' />
              </label>
            </div>
            <div className='input-field'>
              <h2>Address Line 1</h2>
              <label>
                <input type="text" name='adsress' placeholder='123 street' />
              </label>
            </div>
            <div className='input-field'>
              <h2>Country</h2>
              <select name="country" >
                <option>United States</option>
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
              </select>
            </div>
            <div className='input-field'>
              <h2>State</h2>
              <label>
                <input type="text" name='country' placeholder='New York' />
              </label>
            </div>
            <div className='input-fields'>
              <div className='check-input'>
                <label>
                  <input type="checkbox" />
                </label>
                <h3>Create an account</h3>
              </div>
            </div>
            <div className='input-fields'>
              <div className='check-input'>
                <label>
                  <input type="checkbox" />
                </label>
                <h3>Ship to different address</h3>
              </div>
            </div>
          </div>
          <div className='boxes-create-acc'>
          <div className='input-field'>
              <h2>Last Name</h2>
              <label>
                <input type="text" name='lasttname' placeholder='Doe' />
              </label>
            </div>
            <div className='input-field'>
              <h2>Mobile No</h2>
              <label>
                <input type="text" name='number' placeholder='+123 456 789' />
              </label>
            </div>
            <div className='input-field'>
              <h2>Address Line 2</h2>
              <label>
                <input type="text" name='street' placeholder='123 street' />
              </label>
            </div>
            <div className='input-field'>
              <h2>City</h2>
              <label>
                <input type="text" name='lasttname' placeholder='New York' />
              </label>
            </div>
            <div className='input-field'>
              <h2>Zip Code </h2>
              <label>
                <input type="text" name='code' placeholder='1 2 3' />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className='order-container'>
        <div className='header-order'>
          <h4>ORDER TOTAL-------------------------------------------------------</h4>
        </div>
        <div className='contaner-products'>
          <div className='total-box'>
            <div className='total-header'>
              <h3>Products</h3>
            </div>
            <div className='product-name'>
              <h4>Product Name 1</h4>
              <h4>$150</h4>
            </div>
            <div className='product-name'>
              <h4>Product Name 2</h4>
              <h4>$150</h4>
            </div>
            <div className='product-name'>
              <h4>Product Name 3</h4>
              <h4>$150</h4>
            </div>
            -----------------------------------------------------------------
            <div className='product-name'>
              <h3>Subtotal</h3>
              <h3>$150</h3>
            </div>
            <div className='product-name'>
              <h3>Shipping</h3>
              <h3>$10</h3>
            </div>
            -----------------------------------------------------------------

            <div className='product-name'>
              <h2>Total</h2>
              <h2>$160</h2>
            </div>
          </div>
        </div>
        <div className='payment-container'>
          <div className='header-payment'>
            <h4>PAYMENT--------------------------------------------------------------</h4>
          </div>
          <div className='order-check'>
            <div className='orders-box'>
            <label>
              <input className='raddio-button' type="radio" />
            </label>
            <h3>Paypal</h3>
            </div>
            <div className='orders-box'>
            <label>
              <input className='raddio-button' type="radio" />
            </label>
            <h3>Direct Check</h3>
            </div>
            <div className='orders-box'>
            <label>
              <input className='raddio-button' type="radio" />
            </label>
            <h3>Bank Transfer</h3>
            </div>
            <label>
              <button>Place Order</button>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Checkout;