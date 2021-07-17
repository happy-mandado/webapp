import * as types from '../actions/actionTypes'

const draftReducer = (state = {}, action) => {
	switch (action.type) {
		case types.SET_DRAFT:
			return {
				products: {},
				...state,
				...action.draft,
			};
		case types.SET_DRAFT_PRODUCTS:
			const productsOnSet = action.products.reduce((accum, product) => {
				accum[product.name] = product;
				return accum;
			}, {});

			return {
				...state,
				products: productsOnSet,
			};
		case types.ADD_DRAFT_PRODUCT:
			return {
				...state,
				products: {
					...state.products,
					[action.product.name]: action.product,
				},
			};
		case types.REMOVE_DRAFT_PRODUCT:
			const productsOnRemoval = {
				...state.products
			};

			delete productsOnRemoval[action.product.name];

			return {
				...state,
				products: productsOnRemoval,
			};
		case types.REMOVE_DRAFT:
			// NOTE: Does not matter there are no products since empty section
			// will be rendered
			return {
				// No id
				// No name
				// No products
			};
		case types.CREATE_DRAFT:
			// Be careful here with products, we may have some orphan products
			// from an unsuccesful removal
			// NOTE: products here will be overwriten after first render of section
			const productsOnCreation = {
				...state.products,
			};
			return {
				...action.draft, 
				products: productsOnCreation,
			};
		case types.SELECT_DRAFT_PRODUCT:
			const productsOnSelection = {
				...state.products
			};

			productsOnSelection[action.product.name].selected = true;

			return {
				...state,
				products: productsOnSelection,
			};
		case types.UNSELECT_DRAFT_PRODUCT:
			const productsOnUnselection = {
				...state.products
			};

			productsOnUnselection[action.product.name].selected = false;

			return {
				...state,
				products: productsOnUnselection,
			};
		default:
		  return state
	}
}

export default draftReducer;
