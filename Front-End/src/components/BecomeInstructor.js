import React, { Component } from 'react';
import smile from './pics/smile.jpg';

export class BecomeInstructor extends Component {
	render() {
		return (
			<div className='smile'>
				<img src={smile}></img>
				<div>
					<h1>Become Instructor</h1>
					<h3>
						Top instructors from around the world teach<br></br> the students on
						Grade-A. We provide the<br></br> tools and skills to teach what you
						love.
					</h3>
					<button>Start Teaching Today</button>
				</div>
			</div>
		);
	}
}

export default BecomeInstructor;
