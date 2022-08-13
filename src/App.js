import React, { useState } from "react";
import "./App.css"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import love from "./assets/icons/love.png"
import store from "./assets/icons/store.png"
import Home from "./components/Home";
import Shop from "./components/Shop";
// import ShopDetail from "./components/ShopDetail";
import ShopDetail from "./components/ShopDetail";
import Pages from "./components/Pages";
import Contact from "./components/Contact";
import Footer from "./footer";
import Shopcart from "./components/shoping-cart";
import Checkout from "./components/checkout-main";



function App() {


const[get,set]=useState({
	love:0,
	store:0,

})



	return (
		<div className="container">
			<div className="block-g">


				<BrowserRouter>
					<div className="g-cont">
						<div className="for-logo">
							<span><h1 id="for-one">MULTI</h1></span>
							<span><h1 id="for-two">SHOP</h1></span>
						</div>
						<div className="box-sections">
							<div className="home-box">
								<NavLink to="/" style={({ isActive }) => ({
									color: isActive ? '#FFD333' : 'white'
								})}>
									<span>Home</span>
								</NavLink>
							</div>
							<div className="shop-box">
								<NavLink to="/shop" style={({ isActive }) => ({
									color: isActive ? '#FFD333' : 'white'
								})}>
									<span>Shop</span>
								</NavLink>
							</div>
							<div className="detail-box">
								<NavLink to="/shopdetail" style={({ isActive }) => ({
									color: isActive ? '#FFD333' : 'white'
								})}>
									<span>Shop Detail</span>
								</NavLink>
							</div>
							<div className="page-box">
								<NavLink to="" style={({ isActive }) => ({
									color: isActive ? 'white' : 'white'
								})}>
									<span>Pages
										<div className="for-texts">
											<NavLink to="/shopcart">
												<h4>Shopping Cart</h4>
											</NavLink>
											<NavLink to="/checkout">
													<h4>Checkout</h4>
											</NavLink>
											
										
										</div>
									</span>
									
								</NavLink>




							</div>
							<div className="contact-box">
								<NavLink to="/contact" style={({ isActive }) => ({
									color: isActive ? '#FFD333' : 'white'
								})}>
									<span>Contact</span>
								</NavLink>
							</div>
						</div>

					</div>
					<div className="bar-cont">
						<div className="for-love">
							<img src={love} alt="#"  />
							<span>{get.love}</span>
						</div>
						<div className="for-shop">
							<img src={store} alt="#"  />
							<span>{get.store}</span>

						</div>
					</div>


					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/shop" element={<Shop />} />
						<Route exact path="/shopdetail" element={<ShopDetail />} />
						<Route exact path="/pages" element={<Pages />} />
						<Route exact path="/contact" element={<Contact />} />
						<Route exact path="/shopcart" element={<Shopcart/>}/>
						<Route exact path="/checkout" element={<Checkout/>}/>
					</Routes>
					<Footer/>
				</BrowserRouter>
			</div>
			
		</div>
	);
}

export default App;
