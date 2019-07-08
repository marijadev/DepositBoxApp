import React, { Component } from 'react';
import './style.scss';
import Key from '../key';

class Keyboard extends Component {
	state = {};

	renderKeys = () => {
		const keys = [
			{ val: '0', order: '5' },
			{ val: '1', order: '3' },
			{ val: '2', order: '3' },
			{ val: '3', order: '3' },
			{ val: '4', order: '2' },
			{ val: '5', order: '2' },
			{ val: '6', order: '2' },
			{ val: '7', order: '1' },
			{ val: '8', order: '1' },
			{ val: '9', order: '1' },
			{ val: '*', order: '4' },
			{ val: 'L', order: '6' }
		];

		return keys.map(key => (
			<Key data={key} key={key.val} />
		));
	};
	render() {
		return (
			<div
				className="depositBox__keyboard"
			>
				{this.renderKeys()}
			</div>
		);
	}
}

export default Keyboard;
