import React, { Component } from 'react';
import '../App.css';

class Header extends Component {
	render() {
		return (
			<div className="Header">
				<ul className="header-list">
					<li>React</li>
					<li>Redux</li>
					<li>Angular</li>
					<li>HTML5</li>
					<li>CSS</li>
				</ul>
			</div>
		);
	}
}

export default Header;
