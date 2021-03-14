import { combineReducers } from 'redux'

import * as types from '../actions/actionTypes'
import { DRAFTS_SECTION } from '../consts'


const defaultSection = {
	id: DRAFTS_SECTION,
	isLoading: true,
};

const sectionReducer = (state = defaultSection, action) => {
	switch(action.type) {
		case types.SET_APP_SECTION:
			return {
				id: action.section.id,
				isLoading: action.section.isLoading,
			};
		case types.SET_APP_SECTION_LOADING_STATE:
			return {
				...state,
				isLoading: action.isLoading,
			};
		default:
			return state
	}
}

const errorReducer = (state = null, action) => {
	const { type, error } = action

	if (type === types.RESET_APP_ERROR) {
		return null
	} else if (error) {
		return error
	}

	return state
};

const loadingReducer = (state = true, action) => {
	switch(action.type) {
		case types.SET_APP_LOADING_STATE:
			return action.isLoading;
		default:
			return state;
	};
};

const appReducer = combineReducers({
	section: sectionReducer,
	error: errorReducer,
	isLoading: loadingReducer,
	// settings: settingsReducer,
});

export default appReducer;
