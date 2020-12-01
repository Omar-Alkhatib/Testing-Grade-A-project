import React, { Component } from 'react';
import android from './pics/android.jpg';
import networks from './pics/networks.png';
import webdesign from './pics/webdesign.jpg';
import support from './pics/support.jpg';
import ios from './pics/ios.png';
import webdev from './pics/webdev.jpg';

export class TopCategories extends Component {
	render() {
		return (
			<div>
				<h1 className='tt'>Top categories</h1>
				<div className='cards'>
					<div className='card'>
						<img src={android}></img>
						<h2>Android Devlopment</h2>
					</div>
					<div className='card'>
						<img src={networks}></img>
						<h2>Netoworking</h2>
					</div>
					<div className='card'>
						<img src={webdesign}></img>
						<h2>Web Design</h2>
					</div>
					<div className='card'>
						<img src={support}></img>
						<h2>IT support</h2>
					</div>
					<div className='card'>
						<img src={ios}></img>
						<h2>Ios Devlopment</h2>
					</div>
					<div className='card'>
						<img src={webdev}></img>
						<h2>Web Devlopment</h2>
					</div>
				</div>
			</div>
		);
	}
}

export default TopCategories;
