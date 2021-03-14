import { combineReducers } from 'redux'

import { DRAFTS_SECTION } from '../consts'


const defaultSection = {
	id: DRAFTS_SECTION,
	isLoading: true,
};

const sectionReducer = (state = defaultSection, action) => {
	switch(action.type) {
		case types.SET_APP_SECTION:
			return {
				id: action.id,
				isLoading: true,
			};
		default:
			return state
	}
}

const appReducer = combineReducers({
	id: sectionReducer,
	isLoading: loadingReducer,
	// error: errorReducer,
	// settings: settingsReducer,
});

export default appReducer;
