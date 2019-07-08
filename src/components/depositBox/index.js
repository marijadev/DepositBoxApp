import React, { Component } from 'react';
import Screen from '../screen';
import Keyboard from '../keyboard';

import './style.scss';

class DepositBox extends Component {
	state = {};
	render() {
		return (
			<div className="depositBox">
				<Screen />
				<Keyboard />
				<div className="depositBox__sn">S/N: 4815162342</div>
			</div>
		);
	}
}

export default DepositBox;
