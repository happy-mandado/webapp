import { combineReducers } from 'redux'

import * as types from '../actions/actionTypes'


const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === types.RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
};

const newDraftReducer = (state = null, action) => {
	switch (action.type) {
		case types.CREATE_NEW_DRAFT:
			return {};
		case types.REMOVE_NEW_DRAFT:
			return null;
		default:
		  return state
	}
};

const selectedDraftReducer = (state = null, action) => {
	switch (action.type) {
		case types.SET_SELECTED_DRAFT:
			return action.draft;
		default:
		  return state
	}
};

const productsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_PRODUCTS:
			return action.products.reduce((accum, product) => {
				accum[product.id] = product;
				return accum;
			}, {})
		default:
		  return state
	}
}

const draftsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_DRAFTS:
			return action.drafts.reduce((accum, draft) => {
				accum[draft.id] = draft;
				return accum;
			}, {})
		default:
		  return state
	}
}

const listsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_LISTS:
			return action.lists.reduce((accum, list) => {
				accum[list.id] = list;
				return accum;
			}, {})
		default:
		  return state
	}
}

const selectedSectionReducer = (state = 'lists', action) => {
	switch(action.type) {
		case types.SET_SECTION:
			return action.section
		default:
			return state
	}
}

const rootReducer = combineReducers({
  	selectedSection: selectedSectionReducer,
  	lists: listsReducer,
  	drafts: draftsReducer,
	selectedDraft: selectedDraftReducer,
	newDraft: newDraftReducer,
  	errorMessage,
	products: productsReducer,
});

export default rootReducer;
