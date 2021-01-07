import { combineReducers } from 'redux'

import * as types from '../actions/actionTypes'

const productsReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_DRAFT_PRODUCTS:
			return action.products.reduce((accum, product) => {
				accum[product.id] = product;
				return accum;
			}, {})
		default:
		  return state
	}
}

const draftReducer = combineReducers({
	products: productsReducer,
});

export default draftReducer;
