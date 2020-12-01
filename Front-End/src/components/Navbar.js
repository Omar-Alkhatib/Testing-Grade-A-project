import React, { Component } from 'react';
import logo from './pics/logo.png';
import search from './pics/search.png';

export class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className='navbar'>
					<img src={logo} className='logo'></img>
					<h4>Categories</h4>
					<div className='search'>
						<img src={search}></img>
						<input placeholder='Search for anything'></input>
					</div>
					<h4>Teach On Grade-A</h4>
					<button className='log'>Log in</button>
					<button className='sign'>Sign up</button>
				</nav>
			</div>
		);
	}
}

export default Navbar;
