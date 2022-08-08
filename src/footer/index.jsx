import "./style.css"
import React from 'react';
import insta from "..//assets/icons/instagram.png";
import facebook from "..//assets/icons/facebook.png";
import twiter from "..//assets/icons/twitter.png";
import linkedin from "..//assets/icons/linkedin.png";
import visa from "..//assets/icons/mastercards.png"









const Footer = () => {

     return (
          <div className="footer-cont">
            <div className="footer-box">
                <h2>GET IN TOUCH</h2>
                <p>No dolore ipsum accusam <br /> no lorem.
                 Invidunt sed clita <br /> kasd clita et et dolor sed dolor.  </p>
                 <h5>123 Street, New York, USA</h5>
                 <h5>info@example.com</h5>
                 <h5>+012 345 67890</h5>
            </div>
            <div className="footer-box">
                <h2>QUICK SHOP</h2>
                <h3>Home</h3>
                <h3>Our Shop</h3>
                <h3>Shop Detail</h3>
                <h3>Shopping Cart</h3>
                <h3>Checkout</h3>
                <h3>Contact Us</h3>
            </div>
            <div className="footer-box">
            <h2>MY ACCOUNT</h2>
                <h3>Home</h3>
                <h3>Our Shop</h3>
                <h3>Shop Detail</h3>
                <h3>Shopping Cart</h3>
                <h3>Checkout</h3>
                <h3>Contact Us</h3>
            </div>
            <div className="footer-box">
                <h2>NEWSLETTER</h2>
                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                <label>
                    <input type="email" name="email" placeholder="Your Email Address"/>
                    <button>Sign Up</button>
                </label>
                <h2>FOLLOW US</h2>
                <div className="for-icons-box">
                   <img src={insta} alt="#" />
                   <img src={facebook} alt="#" />
                   <img src={twiter} alt="#" />
                   <img src={linkedin} alt="#" />
                   
                </div>
            </div>
        <div className="underline-footer-cont">
            <div className="footer-info">
                <p>© <span>Domain.</span> All Rights Reserved. Designed by <span>HTML Codex</span></p>
            </div>
            <div className="for-cards">
                <img src={visa} alt="#" />
            </div>
        </div>

          </div>


     )
};

export default Footer;