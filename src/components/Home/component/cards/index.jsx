import "./style.css"
import React from 'react';



const Cards = () => {

     return (
          <div className="global-cont-cards">
               <div className="box-card" style={{ backgroundImage: `url(${require("..//..//..//..//assets/icons/fruity.jpg")})` }}></div>
               <div className="box-card" style={{ backgroundImage: `url(${require("..//..//..//..//assets/icons/exchange.jpg")})` }}></div>
               <div className="box-card" style={{ backgroundImage: `url(${require("..//..//..//..//assets/icons/blue.jpg")})` }}></div>
               <div className="box-card" style={{ backgroundImage: `url(${require("..//..//..//..//assets/icons/national.jpg")})` }}></div>
               <div className="box-card" style={{ backgroundImage: `url(${require("..//..//..//..//assets/icons/media.jpg")})` }}></div>
               <div className="box-card" style={{ backgroundImage: `url(${require("..//..//..//..//assets/icons/apply.jpg")})` }}></div>

          </div>


     )
};

export default Cards;