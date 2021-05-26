import React, { Component } from 'react';
import Light from './Light';
import './App.css';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isLightOn: false,
		};
	}

	handleClick = () => {
		this.setState({ isLightOn: !this.state.isLightOn });
	};
	render = () => {
		const bulb = this.state.isLightOn
			? 'https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png'
			: 'https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lightoff.png';
		return (
			<div className='App'>
				<Light onClick={this.handleClick} image={bulb} />
			</div>
		);
	};
}
export default App;
