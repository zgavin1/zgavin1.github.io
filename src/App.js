import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Hi - my name is Zach. I'm a UI Engineer.</h1>
				</header>
				<p className="App-intro">
					This page is currently under construction!
				</p>
				<p>Contact me at <a href="mailto:gavinzach@gmail.com">gavinzach@gmail.com</a></p>
			</div>
		);
	}
}

export default App;
