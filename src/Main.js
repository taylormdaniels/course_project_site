import React, { Component, ImageBackground } from "react";

import {
	Route,
	Routes
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import FavBook from "./FavBook";
import FavMusic from "./FavMusic";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
import Hobbies from "./Hobbies";
import About from "./About";

class Main extends Component {
	render() {
		return (
				<div> 
					<nav className="nav-bar">
						<NavBar/>
					</nav>
					<div className="content">
							<Routes> 
								<Route exact path="/" element={<Home/>}/>
								<Route path="/stuff" element={<Stuff/>}/>
								<Route path="/contact" element={<Contact/>}/>
								<Route path="/favbook" element={<FavBook/>}/>
								<Route path="/favmusic" element={<FavMusic/>}/>
								<Route path="/hobbies" element={<Hobbies/>}/>
								<Route path="/aboutme" element={<About/>}/>
							</Routes>
					</div>
					<footer>
						<Footer/>
					</footer>
				</div>
		);
	}
}

export default Main;