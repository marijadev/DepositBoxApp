import React from 'react';
import { connect } from 'react-redux';
import { setPasscode, setScreenActive } from '../../redux/actions/actions';

import './style.scss';

let Key = props => {
	const handleClick = e => {
		const { passcode } = props;
		let trimmedPasscodeToLastSixCharacters = `${passcode}${
			e.target.innerHTML
		}`;
		trimmedPasscodeToLastSixCharacters = trimmedPasscodeToLastSixCharacters.substring(
			trimmedPasscodeToLastSixCharacters.length - 6,
			trimmedPasscodeToLastSixCharacters.length
		);
		props.debouncedHandler();
		props.debouncedHandlerIdleScreen();
		props.dispatch(setScreenActive(true));
		props.dispatch(setPasscode(trimmedPasscodeToLastSixCharacters));
	};

	return (
		<button
			onClick={e => handleClick(e)}
			className="depositBox__key"
			type="text"
			style={{ order: props.data.order }}
		>
			{props.data.val}
		</button>
	);
};

const mapStateToProps = store => {
	return {
		passcode: store.passcode
	};
};

const containerKey = connect(mapStateToProps)(Key);

export default containerKey;
