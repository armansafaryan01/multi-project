import "./style.css"
import React from 'react';
import girl from "../../assets/icons/girl.jpg";
import camera from "../../assets/icons/photo.jpg";
import shoes from "../../assets/icons/shoes.jpg";
import shampoo from "../../assets/icons/shampoo.jpg";

const category = [
     {
          image: girl,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: camera,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: shoes,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: shampoo,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: shampoo,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: shoes,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: camera,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: girl,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: camera,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: girl,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: shampoo,
          name: "Category Name",
          productquantity: "100 Products",
     },
     {
          image: shoes,
          name: "Category Name",
          productquantity: "100 Products",
     },


];

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

             <div className="for-header-name">
                  <h1 className="category">CATEGORIES</h1>
              </div>
               <div className="container-blocks">
                    {category.map((item, index) => (
                         <div className="boxes-category">

                              <img style={{ width: '100px', height: "100px", }} src={item.image} alt="" />

                              <div className="for-info">

                                  <h3>{item.name}</h3> 
                                   <div>
                                  <h5> {item.productquantity}</h5>
                                   </div>

                              </div>

                         </div>

                    ))}
               </div>



          </div>


     )
};

export default Home;