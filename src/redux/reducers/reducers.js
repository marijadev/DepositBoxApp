import {
	SCREEN_SET_MESSAGE,
	SCREEN_ACTIVE,
	DEVICE_LOCK,
	SET_PASSCODE,
	SAVE_PASSCODE,
	READ_SCREEN_MESSAGE
} from '../actions/types.js';

const initialState = {
	screenStatusMessage: '',
	screenActive: false,
	deviceLocked: false,
	passcode: '',
	savedPasscode: '',
	readScreenMessage: false
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SCREEN_SET_MESSAGE:
			return {
				...state,
				screenStatusMessage: action.payload
			};
		case SCREEN_ACTIVE:
			return {
				...state,
				screenActive: action.payload
			};
		case DEVICE_LOCK:
			return {
				...state,
				deviceLocked: action.payload
			};
		case SET_PASSCODE:
			return {
				...state,
				passcode: `${action.payload}`
			};
		case SAVE_PASSCODE:
			return {
				...state,
				savedPasscode: `${action.payload}`
			};
		case READ_SCREEN_MESSAGE:
			return {
				...state,
				readScreenMessage: action.payload
			};
		default:
			return state;
	}
};
