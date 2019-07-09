import React from 'react';
import { connect } from 'react-redux';
import './style.scss';

const Screen = props => {
	return (
		<div
			className={
				props.screenActive
					? 'depositBox__screen active'
					: 'depositBox__screen inactive'
			}
		>
			<div>{props.deviceLocked ? 'Locked' : 'Unlocked'}</div>
			<div style={{ textAlign: 'right', fontSize: '32px' }}>
				{props.readScreenMessage
					? props.screenStatusMessage
					: props.passcode}
			</div>
		</div>
	);
};

const mapStateToProps = store => {
	return {
		passcode: store.passcode,
		screenStatusMessage: store.screenStatusMessage,
		screenActive: store.screenActive,
		deviceLocked: store.deviceLocked,
		readScreenMessage: store.readScreenMessage
	};
};

const containerScreen = connect(mapStateToProps)(Screen);
export default containerScreen;
