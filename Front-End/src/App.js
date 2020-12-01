import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
	return (
		<Router>
			<Home />
		</Router>
	);
};

export default App;
