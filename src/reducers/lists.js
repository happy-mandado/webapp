import { combineReducers } from 'redux'

import * as types from '../actions/actionTypes'

const closedListsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_LISTS:
			return action.lists.reduce((accum, list) => {
				if (list.isClosed()) {
					accum[list.id] = list;
				}

				return accum;
			}, state)
		default:
		  return state
	}
}

const openedListsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_LISTS:
			return action.lists.reduce((accum, list) => {
				if (list.isOpened()) {
					accum[list.id] = list;
				}

				return accum;
			}, state)
		default:
		  return state
	}
}

const listsReducer = combineReducers({
	closed: closedListsReducer,
	opened: openedListsReducer,
});

export default listsReducer;
