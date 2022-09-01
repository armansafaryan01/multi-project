import React from 'react';
import "./style.css"
import nikon from "..//..//assets/icons/nikon.jpg";
import blueshirt from "..//..//assets/icons/blueshirt.jpg"
import lamp from "..//..//assets/icons/night lamp.jpg"
import { useState } from 'react';
import { useEffect, } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import nike from "..//..//assets/icons/nikeshoes.jpg"
import dron from "..//..//assets/icons/dron.jpg"

const Shopcart = () => {
  const navigate = useNavigate()
  const GoTo = () => {


    

  }



  const [items, setItems] = useState([
    {
      img: nikon,
      h4: 'Product Name',
      p: '150',
      counter: 3,
    },
    {
      img: dron,
      h4: 'Product Name ',
      p: '320',
      counter: 2,
    },
    {
      img: nike,
      h4: 'Product Name',
      p: '150',
      counter: 3,
    },
    {
      img: blueshirt,
      h4: 'Product Name ',
      p: '320',
      counter: 2,
    },
    {
      img: nikon,
      h4: 'Product Name',
      p: '150',
      counter: 3,
    },

    {
      img: lamp,
      h4: 'Product Name',
      p: '150',
      counter: 3,
    },

    {
      img: nikon,
      h4: 'Product Name ',
      p: '320',
      counter: 2,
    },


  ])
  const filtr = (indes, id) => {

    setItems(items.filter((vel, x) => { return id !== x && vel !== indes }))


  }




  let newPost1 = items.reduce((sum, item) => (sum += (item.p * item.counter)), 0)

  useEffect(() => {


  }, [items])
  const forsis = (is, indexs) => {



    setItems(items => items.map((item, itemIndex) => {
      if (itemIndex === indexs)
        return ({ ...item, counter: is ? item.counter + 1 : item.counter - 1 })
      else return item
    }))

  }
  const zoom = () => {
    let x = items
    x.id = 365
    setItems(x)
  }
  const [get, set] = useState(1)

  const foo = () => {
    set(get + 1)
    zoom()
  }

  const foo1 = () => {
    if (get !== 0) {
      set(get - 1)
    }
  }

  return < div>

    <div className="App-G-flex" style={{ background: 'whitesmoke', fontSize: "30px", color: ' gray' }}>
      <div className="for-sections-link">
        <h4>Home</h4>
        <span>/</span>
        <h4>Shop</h4>
        <span>/</span>
        <h4 id="shop-list">Shop Detail</h4>
      </div>

    </div>

    <div className="App-cartis">
      <div className="ada">
        <div className="G-flex  aria">
          <h4>Products</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
          <h4>Remove</h4>
        </div>


        {items.map((item, index) => {
          return <div className='camera-box' kay={index}>
            <div className='name-product'>
              <img src={item.img} alt="#" />
              <h4>{item.h4}</h4>
            </div>
            <div className='box-price'>
              <p>${item.p}</p>
            </div>
            <div className='for-quanity'>
              <div className="for-payments-quality">
                <button className='function-btn' onClick={() => forsis(false, index)}>-</button>
                {/* <input id="value-qnt" value={item.counter} /> */}
                <button id="value-qnt">{item.counter}</button>
                <button className='function-btn' onClick={() => forsis(true, index)}>+</button>
              </div>
            </div>
            <div className='total-price'>
              <p>${item.p * item.counter}</p>
            </div>
            <div className='remove-btn'>
              <button onClick={() => filtr(item, index)} >✖</button>
            </div>
          </div>
        })}
      </div>

      <div className="g-flex" style={{ width: '40%', marginLeft: '25px' }}>
        <div className='box-checkout'>
          <div className='box-cupon-input'>
            <label>
              <input type="text" placeholder='Coupon Code' />
              <button>Apply Coupon</button>
            </label>
          </div>
          <div className="D-after">
            <h2>CART SUMMARY</h2>
          </div>
          <div className='cont-checkout'>
            <div className='box-topic-checkout'>

              <div className='Subtotal-box'>
                <h4>Subtotal</h4>
                <p >${newPost1 + '   /    '}   -10% { }</p>
              </div>
              <div className='Subtotal-box'>
                <h4>Shipping</h4>
                <p>{newPost1 < 10000 ? '$150' : "$75"}</p>
              </div>
              <div className="AFTER">
                <div></div>
              </div>
              <div className='Subtotal-box'>
                <h4>Total</h4>
                <p>${newPost1 * 0.9 + +`${newPost1 < 10000 ? 150 : 75}`}</p>
              </div>
              <button onClick={GoTo}>Processed To Checkout</button>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
}






export default Shopcart;