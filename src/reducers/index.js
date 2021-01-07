import { combineReducers } from 'redux'

import * as types from '../actions/actionTypes'
import appReducer from './app'
import listsReducer from './lists'
import draftReducer from './draft'

const suggestedProductsReducer = (state = new Map(), action) => {
	switch (action.type) {
		case types.SET_SUGGESTED_PRODUCTS:
			return action.suggestedProducts.reduce((accum, suggestedProduct) => {
				accum.set(suggestedProduct.id, suggestedProduct);
				return accum;
			}, new Map())
		default:
		  return state
	}
}

const rootReducer = combineReducers({
	app: appReducer,
	lists: listsReducer,
	draft: draftReducer,
	suggestedProducts: suggestedProductsReducer,
});

export default rootReducer;
