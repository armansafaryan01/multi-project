import "./style.css"
import React, { useState } from 'react';
import camera from "..//..//assets/icons/nikon.jpg";
import search from "..//..//assets/icons/search.png"
import heart from "..//..//assets/icons/heart.png"
import storee from "..//..//assets/icons/storee.png"
import changee from "..//..//assets/icons/changee.png"
import nikeshoes from "..//..//assets/icons/nikeshoes.jpg"
import lamp from "..//..//assets/icons/night lamp.jpg"
import blueshirt from "..//..//assets/icons/blueshirt.jpg"
// import Products from "..//Home/component/products"




const products = [
  {
    image: camera,
    name: "Product Name Goes Here",
    price: "$123  $123.00",
  },
  {
    image: blueshirt,
    name: "Product Name Goes Here",
    price: "$123  $123.00",
  },
  {
    image: lamp,
    name: "Product Name Goes Here",
    price: "$123  $123.00",
  },
  {
    image: nikeshoes,
    name: "Product Name Goes Here",
    price: "$123  $123.00",
  },
  // {
  //      image: dron,
  //      name: "Product Name Goes Here",
  //      price: "$123  $123.00",
  // },
  // {
  //      image: applewatch,
  //      name: "Product Name Goes Here",
  //      price: "$123  $123.00",
  // },

]















const ShopDetail = () => {
    const[get,set]=useState(1)

 const foo =()=>{
   set(get+1)
 }
 
 const foo1 =()=>{
   if(get!==0){
    set(get-1)
   }
}

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
      <div className="cont-box-info">
        <h2>Product Name Goes Here</h2>
        <h4>$150.00</h4>
        <p>Volup erat ipsum diam elitr rebum et dolor.
          Est nonumy elitr erat diam stet sit clita ea. <br /> Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy</p>
          <button onClick={foo1}>-</button>
          <span className="value">{get}</span>
          <button onClick={foo}>+</button>

      </div>
      <div className="for-description">

        <div className="box-reviews">
          <button>Description</button>
          <button>Information</button>
          <button >Reviews (0)</button>
        </div>
        <h2>Product Description</h2>
        <h5>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit
          rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</h5>
        <h5 id="info-padding" >Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem
          dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</h5>
      </div>
      <div className="for-blocks-header-shop">
        <h1 className="box-blocks-shop">YOU MAY ALSO LIKE-----------------------------------------------------------------------------------</h1>

      </div>
      <div className="features-blocks-shop">
        {products.map((item, index) => (
          <div className="boxes-features">

            <img className="features-img" style={{ width: '270px', height: "240px", }} src={item.image} alt="#" />
            <div className="for-opacity">
              <img src={search} alt="#" />
              <img src={heart} alt="#" />
              <img src={storee} alt="#" />
              <img src={changee} alt="#" />
            </div>
            <div className="hover"></div>
            <div className="features-info">

              <h3>{item.name}</h3>
              <div>
                <h5> {item.price}</h5>
              </div>

            </div>


          </div>
        ))}
      </div>
    </div>
  )
};

export default ShopDetail;