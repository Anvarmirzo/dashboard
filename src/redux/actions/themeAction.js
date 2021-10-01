import { SET_COLOR, SET_THEME } from '../constants/constants';

export const setThemeAction = (mode) => ({ type: SET_THEME, payload: mode });
export const setColorAction = (mode) => ({ type: SET_COLOR, payload: mode });
