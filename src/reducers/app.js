import { combineReducers } from 'redux'

import * as types from '../actions/actionTypes'
import { DRAFTS_SECTION } from '../consts'


const sectionReducer = (state = DRAFTS_SECTION, action) => {
	switch(action.type) {
		case types.SET_SECTION:
			return action.section
		default:
			return state
	}
}

const errorReducer = (state = null, action) => {
	const { type, error } = action

	if (type === types.RESET_ERROR_MESSAGE) {
		return null
	} else if (error) {
		return error
	}

	return state
};

const appReducer = combineReducers({
	section: sectionReducer,
	error: errorReducer,
});

export default appReducer;
