import React, { Component } from "react";

import './style.css';

import { NavLink } from "react-router-dom";
import styled from "styled-components";

class NavBar extends Component {
	render() {
		return ( 
				<div>
					<h1>Taylor Daniels</h1>
					<ul className="navbar">
						<li><NavLink exact to="/">Home</NavLink></li>
						<li><NavLink to="/stuff">Stuff</NavLink></li>
						<li><NavLink to="/contact">Contact</NavLink></li>
						<li><NavLink to="/favbook">Favorite Books</NavLink></li>
						<li><NavLink to="/favmusic">Favorite Albums</NavLink></li>
						<li><NavLink to="/hobbies">Hobbies</NavLink></li>
						<li><NavLink to="/aboutme">About Me</NavLink></li>
					</ul>
				</div>
		);
	}
}
export default NavBar;
