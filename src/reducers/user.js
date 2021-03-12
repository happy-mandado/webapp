import * as types from '../actions/actionTypes'


const userReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_USER:
			return {...state, ...action.user};
		case types.SET_USER_PURCHASED_PRODUCTS:
			const purchasedProducts = action.products.reduce((accum, product) => {
				accum[product.name] = product;
				return accum;
			}, {});
			return {...state, purchasedProducts};
		default:
			return state
	}
}

export default userReducer;
