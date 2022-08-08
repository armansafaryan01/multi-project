import "./style.css"
import React from 'react';
import Category from "..//Home/component/categories";
import Products from "../Home/component/products";
import Shopbox from "../Home/component/shop-boxes";
import Cards from "../Home/component/cards";
import "../Home/component/categories";
// import Category from "../Home/component/categories";
import "../Home/component/products";
// import Products from "../Home/component/products";
import "../Home/component/shop-boxes";
// import Shopbox from "./component/shop-boxes";
// import Cards from "./component/cards";
import "../Home/component/cards";








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
               <div className="cont-product">
                    <div className="blocks-Product">
                         <div className="blocks-img" style={{ backgroundImage: `url(${require("..//..//assets/icons/check.png")})` }}></div>
                         <div className="topic-info">
                              <h2>Quality Product</h2>
                         </div>
                    </div>
                    <div className="blocks-Product">
                         <div className="blocks-img" style={{ backgroundImage: `url(${require("..//..//assets/icons/shiping.png")})` }}></div>
                         <div className="topic-info">
                              <h2>
                                   Free Shipping</h2>
                         </div>
                    </div>
                    <div className="blocks-Product">
                         <div className="blocks-img" style={{ backgroundImage: `url(${require("..//..//assets/icons/change.png")})` }}></div>
                         <div className="topic-info">
                              <h2>14-Day Return</h2>
                         </div>
                    </div>
                    <div className="blocks-Product">
                         <div className="blocks-img" style={{ backgroundImage: `url(${require("..//..//assets/icons/phone.png")})` }}></div>
                         <div className="topic-info">
                              <h2>
                                   24/7 Support</h2>
                         </div>
                    </div>
               </div>


               <Category />

               <Products />

               <Shopbox />

               <Products />

               <Cards />

          </div>
       
         


     )
};

export default Home;