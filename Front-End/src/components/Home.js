import React, { Component } from 'react';
import BecomeInstructor from './BecomeInstructor';
import Goals from './Goals';
import Interface from './Interface';
import { Navbar } from './Navbar';
import Team from './Team';
import TopCategories from './TopCategories';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<Interface />
				<Goals />
				<TopCategories />
				<BecomeInstructor />
				<Team />
			</div>
		);
	}
}
