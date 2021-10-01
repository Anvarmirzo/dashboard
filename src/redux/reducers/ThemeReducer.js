import { SET_COLOR, SET_THEME } from '../constants/constants';

export const ThemeReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_COLOR:
			return { ...state, color: action.payload };
		case SET_THEME:
			return { ...state, mode: action.payload };
		default:
			return state;
	}
};
