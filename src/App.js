import React from "react";
import "./App.css"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import love from "./assets/icons/love.png"
import store from "./assets/icons/store.png"
import Home from "./components/Home";
import Shop from "./components/Shop";
import ShopDetail from "./components/ShopDetail";
import Pages from "./components/Pages";
import Contact from "./components/Contact";



function App() {

	return (
		<div className="container">
			<div className="block">


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
								<NavLink to="/pages" style={({ isActive }) => ({
									color: isActive ? '#FFD333' : 'white'
								})}>
									<span>Pages</span>
									
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
							<span>0</span>
						</div>
						<div className="for-shop">
							<img src={store} alt="#"  />
							<span>0</span>

						</div>
					</div>


					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/shop" element={<Shop />} />
						<Route exact path="/shop detail" element={<ShopDetail />} />
						<Route exact path="/pages" element={<Pages />} />
						<Route exact path="/contact" element={<Contact />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
