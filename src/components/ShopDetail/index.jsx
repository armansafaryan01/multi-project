import "./style.css"
import React from 'react';
import camera from "..//..//assets/icons/nikon.jpg";



const ShopDetail = () => {
    
return (
      <div className="detail-cont">
            <div className="for-sections-link">
        <h4>Home</h4>
        <span>/</span>
        <h4>Shop</h4>
        <span>/</span>
        <h4 id="shop-list">Shop Detail</h4>
      </div>
      <div className="cont-for-boximg">
        <img src={camera} alt="#" />
      </div>
      <div className="cont-box-info"></div>
      <div className="for-description">
        <div className="box-reviews"></div>
      </div>

      </div>
  )
};
  
export default ShopDetail;