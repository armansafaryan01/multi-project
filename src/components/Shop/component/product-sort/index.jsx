import "./style.css"
import React from 'react';
import nikon from "../../../../assets/icons/nikon.jpg";
import blueshirt from "../../../../assets/icons/blueshirt.jpg";
import lamp from "../../../../assets/icons/night lamp.jpg";
import nikeshoes from "../../../../assets/icons/nikeshoes.jpg";
import dron from "../../../../assets/icons/dron.jpg";
import applewatch from "../../../../assets/icons/applewatch.jpg";
import shirts from "../../../../assets/icons/shirts.jpg";
import shampoos from "../../../../assets/icons/shampoos.jpg";
import search from "..//..//..//..//assets/icons/search.png"
import heart from "..//..//..//..//assets/icons/heart.png"
import storee from "..//..//..//..//assets/icons/storee.png"
import changee from "..//..//..//..//assets/icons/changee.png"



const products = [
     {
          image: nikon,
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
     {
          image: dron,
          name: "Product Name Goes Here",
          price: "$123  $123.00",
     },
     {
          image: applewatch,
          name: "Product Name Goes Here",
          price: "$123  $123.00",
     },
     {
          image: shirts,
          name: "Product Name Goes Here",
          price: "$123  $123.00",
     },
     {
          image: shampoos,
          name: "Product Name Goes Here",
          price: "$123  $123.00",
     },
     {
        image: lamp,
        name: "Product Name Goes Here",
        price: "$123  $123.00",
   },
]








const Sort = () => {

     return (
          <div className="sort-cont">
             

    

               <div className="for-blocks-header">
                  {/* <h1 className="box-blocks">FEATURED PRODUCTS</h1> */}
                  <button>Sorting</button>
                  <button>Showing</button>
              </div>
              <div className="features-blocks">
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

export default Sort;