import API from '../api';
import User from '../api/user';
import Draft from '../api/draft';
import * as types from './actionTypes';
import moment from 'moment';


export const setSection = (dispatch, sectionId) => {
	const section = {
		id: sectionId,
		isLoading: true,
	};

	dispatch({ type: types.SET_APP_SECTION, section })
}

export const loadUser = async (dispatch, userId) => {
	if (!userId) {
		return;
	}

	const api = API.client();

	let user;
	try {
		user = await api.readUser(userId)
	} catch (error) {
		return console.log(error);
	}

	dispatch({ type: types.SET_USER, user });
	dispatch({ type: types.SET_APP_LOADING_STATE, isLoading: false });
}

export const loadPurchasedProducts = async (dispatch, userId) => {
	if (!userId) {
		return
	}

	const api = API.client();

	let products;
	try{
		products = await api.readUserProducts(userId)
	} catch(error) {
		return console.error(error);
	}

	dispatch({ type: types.SET_USER_PURCHASED_PRODUCTS, products });
};

export const loadDraft = async (dispatch, userId) => {
	if (!userId) {
		return
	}

	const api = API.client();

	let drafts
	try{
		drafts = await api.readUserDrafts(userId)
	} catch(error) {
		return console.error(error);
	}

	dispatch({ type: types.SET_DRAFT, draft: drafts[0] });
	dispatch({ type: types.SET_APP_SECTION_LOADING_STATE, isLoading: false });

	if (!drafts[0]) {
		return
	}

	let products;
	try {
		products = await api.readUserDraftProducts(userId, drafts[0].id);
	} catch(error) {
		return console.error(error);
	}

	dispatch({ type: types.SET_DRAFT_PRODUCTS, products });
};

export const addProductToDraft = async (dispatch, userId, draftId, product) => {
	if (!userId || !draftId) {
		return
	}

	const api = API.client();

	let createdProduct;
	try {
		createdProduct = await api.createUserDraftProduct(userId, draftId, product);
	} catch(error) {
		return console.error(error);
	}

	dispatch({ type: types.ADD_DRAFT_PRODUCT, product: createdProduct });
};

export const removeProductFromDraft = async (dispatch, userId, draftId, productId) => {
	if (!userId || !draftId) {
		return
	}

	const api = API.client();

	let removedProduct;
	try {
		removedProduct = await api.removeUserDraftProduct(userId, draftId, productId);
	} catch(error) {
		return console.error(error);
	}

	dispatch({ type: types.REMOVE_DRAFT_PRODUCT, product: removedProduct });
};

export const createList = async (dispatch, userId, draftId, products) => {
	if (!userId || !draftId) {
		return
	}

	const api = API.client();

	let list;
	try {
		list = await api.createUserList(userId, draftId, products);
	} catch(error) {
		return console.error(error);
	}

	dispatch({ type: types.REMOVE_DRAFT });
	// dispatch({ type: types.ADD_LIST, list });
}

export const createDraft = async (dispatch, userId) => {
	if (!userId) {
		return
	}

	const api = API.client();

	let draft;
	try {
		draft = await api.createUserDraft(userId);
	} catch(error) {
		return console.error(error);
	}

	dispatch({ type: types.CREATE_DRAFT, draft });
};

export const loadLists = (dispatch) => {
	const api = API.client()

	dispatch({ type: types.SET_LISTS, lists: [{
		isClosed: () => false,
		isOpened: () => true,
		id: 'A',
		name: 'A',
	}, {
		isClosed: () => true,
		isOpened: () => false,
		id: 'B',
		name: 'B',
	}] });
}

export const closeList = (dispatch) => {
	// coming from a draft
}
