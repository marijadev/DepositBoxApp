import {
	SCREEN_SET_MESSAGE,
	SCREEN_ACTIVE,
	DEVICE_LOCK,
	SET_PASSCODE,
	SAVE_PASSCODE,
	READ_SCREEN_MESSAGE
} from './types.js';

export const setScreenMessage = message => {
	return {
		type: SCREEN_SET_MESSAGE,
		payload: message
	};
};

export const setScreenActive = bool => {
	return {
		type: SCREEN_ACTIVE,
		payload: bool
	};
};

export const lockDevice = bool => {
	return {
		type: DEVICE_LOCK,
		payload: bool
	};
};

export const setPasscode = pass => {
	return { 
		type: SET_PASSCODE, 
		payload: pass 
	};
};

export const savePasscode = pass => {
	return { 
		type: SAVE_PASSCODE, 
		payload: pass 
	};
};

export const readScreenMessage = mess => {
	return { 
		type: READ_SCREEN_MESSAGE, 
		payload: mess 
	};
};
