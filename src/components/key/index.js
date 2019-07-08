import React, { Component } from 'react';

import './style.scss';

class Key extends Component {
	state = {};
	render() {
		return (
			<button className='depositBox__key' type="text" style={{ order: this.props.data.order }}>
				{this.props.data.val}
			</button>
		);
	}
}

export default Key;
