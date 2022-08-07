import "./style.css"
import React from 'react';
import "./style.css";
import girl from "../../../../assets/icons/girl.jpg";
import camera from "../../../../assets/icons/photo.jpg";
import shoes from "../../../../assets/icons/shoes.jpg";
import shampoo from "../../../../assets/icons/shampoo.jpg";



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






const Category = () => {

     return (
          <div className="home-cont">
               

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
                                 
                                   </div>
                                   <h4>{item.productquantity}</h4>
                              </div>

                         </div>

                    ))}
               </div>

             


          </div>


     )
};

export default Category;