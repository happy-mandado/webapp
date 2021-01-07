import API from '../api';
import * as types from './actionTypes';
import moment from 'moment';

const config = {
	api: {
		host: process.env.REACT_APP_API_HOST,
		protocol: process.env.REACT_APP_API_PROTOCOL,
		version: process.env.REACT_APP_API_VERSION,
		port: process.env.REACT_APP_API_PORT,
	},
}

const api = API.client(config.api)

export const selectSection = (section, dispatch) => {
	dispatch({ type: types.SET_SECTION, section })
}

export const loadDraft = (dispatch) => {
	const products = [
		{id: '1', name: 'Papel de bano grande', overdue: '3 days'},
		{id: '2', name: 'Calabazas', early: '5 days'},
		{id: '3', name: 'Fresas congeladas', overdue: '1 day'},
		{id: '4', name: 'Queso paquete grande', overdue: '5 days'},
		{id: '5', name: 'Papel toalla paquete doble', onTime: true },
		{id: '6', name: 'Platanos'},
		{id: '7', name: 'Hummus'},
		{id: '8', name: 'Salsa verde casera Herdez'},
		{id: '9', name: 'Atun en agua'},
		{id: '10', name: 'Pasta coccion rapida'},
		{id: '11', name: 'Verduras congeladas', onTime: true},
		{id: '12', name: 'Avena'},
		{id: '13', name: 'Mandarinas'},
		{id: '14', name: 'Pechugas de pollo'},
		{id: '15', name: 'Salmon'},
	];

	dispatch({ type: types.SET_DRAFT_PRODUCTS, products });
}

export const loadLists = (dispatch) => {
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

export const loadUser = async (dispatch, userId) => {
	// Call api
	const user = api.user({id: userId})
	dispatch({ type: types.SET_USER, user })
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



/*
export const loadStates = (dispatch) => {
	const apiStates = api.getStates();
	dispatch({ type: types.SET_STATES, states: apiStates})
}

export const loadCities = async (state, dispatch) => {
	const apiCities = await state.getCities();
	dispatch({ type: types.SET_CITIES, cities: apiCities })
}

export const loadVenues = async (city, dispatch) => {
	const apiVenues = await city.getVenues();
	dispatch({ type: types.SET_VENUES, venues: apiVenues })
}

export const loadRequirements = async (venues, dispatch) => {
	const apiRequirements = await Promise.all(
		Object.values(venues).map(venue => venue.getRequirements())
	)
	dispatch({ type: types.SET_REQUIREMENTS, requirements: apiRequirements.flat() })
}
*/
