import React, { Component } from 'react';
import wlc from './pics/wlc.jpg';

const wlcStyle = {
	backgroundImage: `url(${wlc})`,
	height: '400px',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
};

export class Interface extends Component {
	render() {
		return (
			<div style={wlcStyle} className='wlc'>
				<div className='innerTxt'>
					<h1>
						For every student,<br></br>every classroom.<br></br>Real results.
					</h1>
					<h4>Build skills with courses, online from best instructors</h4>
					<button>Join For Free</button>
				</div>
			</div>
		);
	}
}

export default Interface;
