import "./style.css"
import React from 'react';



const Shopbox = () => {

     return (
          <div className="global-cont-shop">
              <div className="shpecial-box" style={{ backgroundImage: `url(${require("..//..//..//..//assets/icons/girlone.jpg")})` }} >
              <div className="forfon-image">
               <div className="shop-topic">
               <h4>SAVE 20%</h4>
               <h3>Special Offer</h3>
               <button>Shop Now</button>
               </div>
              </div>

              </div>
              <div className="shpecial-box" style={{ backgroundImage: `url(${require("..//..//..//..//assets/icons/girltwo.jpg")})` }}>
              <div className="forfon-image">
              <div className="shop-topic">
              <h4>SAVE 20%</h4>
               <h3>Special Offer</h3>
               <button>Shop Now</button>
              </div>
              </div>
              </div>

    
          </div>


     )
};

export default Shopbox;