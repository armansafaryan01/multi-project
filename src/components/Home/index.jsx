import "./style.css"
import React from 'react';


const Home = () => {

     return (
          <div className="home-cont">
               <div className="g-container">
                    <div className="fashion-cont" style={{ backgroundImage: `url(${require("..//..//assets/icons/menfashion.jpg")})` }}>
                         <div className="for-under-color">
                              <div className="for-topic">
                                   <h1>Men Fashion</h1>
                                   <p>Lorem rebum magna amet lorem magna erat diam stet.
                                        Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                                   <button>Shop Now</button>
                              </div>
                         </div>
                    </div>
                    <div className="special-cont">
                         <div className="box-afterone" style={{ backgroundImage: `url(${require("..//..//assets/icons/girlone.jpg")})` }}>
                              <div className="for-under-fon">
                                   <div className="topic-box">
                                        <h4>SAVE 20%</h4>
                                        <h3>Special Offer</h3>
                                        <button>Shop Now</button>
                                   </div>
                              </div>
                         </div>
                         <div className="box-aftertwo" style={{ backgroundImage: `url(${require("..//..//assets/icons/girltwo.jpg")})` }}>
                         <div className="for-under-fon">
                                   <div className="topic-box">
                                        <h4>SAVE 20%</h4>
                                        <h3>Special Offer</h3>
                                        <button>Shop Now</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
};

export default Home;