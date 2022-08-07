import "./style.css"
import React from 'react';



const Shopbox = () => {

     return (
          <div className="global-cont-shop">
              <div className="shpecial-box" style={{ backgroundImage: `url(${require("..//..//..//..//assets/icons/girlone.jpg")})` }} >
              <div className="forfon-image"></div>

              </div>
              <div className="shpecial-box" style={{ backgroundImage: `url(${require("..//..//..//..//assets/icons/girltwo.jpg")})` }}>
              <div className="forfon-image"></div>
              </div>

    
          </div>


     )
};

export default Shopbox;