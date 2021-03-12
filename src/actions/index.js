import API from '../api';
import User from '../api/user';
import Draft from '../api/draft';
import * as types from './actionTypes';
import moment from 'moment';


export const selectSection = (section, dispatch) => {
	dispatch({ type: types.SET_SECTION, section })
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

	dispatch({ type: types.SET_USER, user })
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

export const loadSuggestedProducts = (dispatch) => {
	const suggestedProducts = [
		{id: '1', name: 'Papel de bano grande', overdue: '3 days'},
		{id: '3', name: 'Fresas congeladas', overdue: '1 day'},
		{id: '4', name: 'Queso paquete grande', overdue: '5 days'},
		{id: '5', name: 'Papel toalla paquete doble', onTime: true },
		{id: '11', name: 'Verduras congeladas', onTime: true},
		{id: '2', name: 'Calabazas', early: '5 days'},
		{id: '6', name: 'Platanos'},
		{id: '7', name: 'Hummus'},
		{id: '8', name: 'Salsa verde casera Herdez'},
		{id: '9', name: 'Atun en agua'},
		{id: '10', name: 'Pasta coccion rapida'},
		{id: '11', name: 'Calabazas', early: '5 days'},
		{id: '12', name: 'Platanos'},
	];

	dispatch({ type: types.SET_SUGGESTED_PRODUCTS, suggestedProducts });
}
