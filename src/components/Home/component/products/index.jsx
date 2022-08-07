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



const products = [
     {
          image: nikon,
          name: "Product Name Goes Here",
          price: "123 Products $123.00",
     },
     {
          image: blueshirt,
          name: "Product Name Goes Here",
          price: "123 Products $123.00",
     },
     {
          image: lamp,
          name: "Product Name Goes Here",
          price: "123 Products $123.00",
     },
     {
          image: nikeshoes,
          name: "Product Name Goes Here",
          price: "123 Products $123.00",
     },
     {
          image: dron,
          name: "Product Name Goes Here",
          price: "123 Products $123.00",
     },
     {
          image: applewatch,
          name: "Product Name Goes Here",
          price: "123 Products $123.00",
     },
     {
          image: shirts,
          name: "Product Name Goes Here",
          price: "123 Products $123.00",
     },
     {
          image: shampoos,
          name: "Product Name Goes Here",
          price: "123 Products $123.00",
     },
]








const Products = () => {

     return (
          <div className="home-cont">
             

    

               <div className="for-header-names">
                  <h1 className="products">FEATURED PRODUCTS</h1>
              </div>
              <div className="container-blocks">
                    {products.map((item, index) => (
                         <div className="">

                              <img style={{ width: '200px', height: "200px", }} src={item.image} alt="" />

                              <div className="for-info">

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

export default Products;