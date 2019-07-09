import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	setScreenActive,
	setScreenMessage,
	savePasscode,
	lockDevice,
	setPasscode,
	readScreenMessage
} from '../../redux/actions/actions';
import { debounce } from '../../utils';
import Key from '../key';

import './style.scss';

class Keyboard extends Component {
	handlePasscode() {
		const { savedPasscode, deviceLocked, passcode } = this.props;
		this.props.dispatch(setScreenActive(true));
		this.props.dispatch(readScreenMessage(true));

		if (deviceLocked) {
			if (savedPasscode === passcode) {
				this.props.dispatch(setScreenMessage('Unlocking'));
				setTimeout(() => {
					this.props.dispatch(setScreenMessage('Ready'));
					setTimeout(() => {
						this.props.dispatch(readScreenMessage(false));
					}, 1500);
					this.props.dispatch(lockDevice(false));
				}, 3000);
			} else {
				this.props.dispatch(setScreenMessage('Error'));
				setTimeout(() => {
					this.props.dispatch(readScreenMessage(false));
				}, 1500);
			}
		} else {
			if (passcode.length === 6) {
				this.props.dispatch(savePasscode(passcode));
				this.props.dispatch(setScreenMessage('Locking'));
				setTimeout(() => {
					this.props.dispatch(lockDevice(true));
					this.props.dispatch(setScreenMessage('Ready'));
					setTimeout(() => {
						this.props.dispatch(readScreenMessage(false));
					}, 1500);
				}, 3000);
			} else {
				this.props.dispatch(setScreenMessage('Error'));
				setTimeout(() => {
					this.props.dispatch(readScreenMessage(false));
				}, 1500);
			}
		}
		this.props.dispatch(setPasscode(''));
	}

	handleIdleScreen() {
		this.props.dispatch(setScreenActive(false));
	}

	debouncedHandler = debounce(this.handlePasscode.bind(this), 1200);
	debouncedHandlerIdleScreen = debounce(
		this.handleIdleScreen.bind(this),
		5000
	);

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
			<Key
				debouncedHandler={this.debouncedHandler}
				debouncedHandlerIdleScreen={this.debouncedHandlerIdleScreen}
				data={key}
				key={key.val}
			/>
		));
	};

	render() {
		return <div className="depositBox__keyboard">{this.renderKeys()}</div>;
	}
}

const mapStateToProps = store => {
	return {
		passcode: store.passcode,
		screenStatusMessage: store.screenStatusMessage,
		savedPasscode: store.savedPasscode,
		deviceLocked: store.deviceLocked
	};
};

const containerKeyboard = connect(mapStateToProps)(Keyboard);

export default containerKeyboard;
