import "./style.css"
import React from 'react';
import Sort from "./component/product-sort";
const Shop = () => {

  return (
    <div className='shop-cont'>
      <div className="for-sections-link">
        <h4>Home</h4>
        <span>/</span>
        <h4>Shop</h4>
        <span>/</span>
        <h4 id="shop-list">Shop List</h4>
      </div>
      <div className="container-information">
        <div className="checkbox-cont">
          <h4>FILTER BY PRICE--------------</h4>
          <div className="for-price">
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>All Price</h6>
              </div>
              <div className="for-amount-box">
                <span>1000</span>
              </div>
            </div>
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>$0 - $100</h6>
              </div>
              <div className="for-amount-box">
                <span>150</span>
              </div>
            </div>
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>$100 - $200</h6>
              </div>
              <div className="for-amount-box">
                <span>295</span>
              </div>
            </div>
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>$200 - $300</h6>
              </div>
              <div className="for-amount-box">
                <span>246</span>
              </div>
            </div>
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>$300 - $400</h6>
              </div>
              <div className="for-amount-box">
                <span>145</span>
              </div>
            </div>
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>$400 - $500</h6>
              </div>
              <div className="for-amount-box">
                <span>168</span>

              </div>
            </div>

          </div>
          <h4>FILTER BY COLOR------------</h4>
          <div className="for-size">
          <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>All Color</h6>
              </div>
              <div className="for-amount-box">
                <span>1000</span>
              </div>
            </div>
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>Black</h6>
              </div>
              <div className="for-amount-box">
                <span>150</span>
              </div>
            </div>
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>White</h6>
              </div>
              <div className="for-amount-box">
                <span>295</span>
              </div>
            </div>
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>Red</h6>
              </div>
              <div className="for-amount-box">
                <span>246</span>
              </div>
            </div>
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>Blue</h6>
              </div>
              <div className="for-amount-box">
                <span>145</span>
              </div>
            </div>
            <div className="boxes-checkox">
              <div className="for-info-box">
                <input type="checkbox" />
                <h6>Green</h6>
              </div>
              <div className="for-amount-box">
                <span>168</span>

              </div>
            </div>
          </div>
        </div>
        <div className="container-for-products">
          <Sort/>
        </div>
      </div>
    </div>
  )
};

export default Shop;