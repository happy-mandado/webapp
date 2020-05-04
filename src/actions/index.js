import API from '../api';
import * as types from './actionTypes';
import moment from 'moment';

const api = API().getInstance()

export const selectSection = (section, dispatch) => {
	dispatch({ type: types.SET_SECTION, section })
}

export const selectDraft = (draft, dispatch) => {
	dispatch({ type: types.SET_SELECTED_DRAFT, draft })
}

export const createDraft = (dispatch) => {
	dispatch({ type: types.CREATE_NEW_DRAFT })
}

export const cancelDraft = (dispatch) => {
	dispatch({ type: types.REMOVE_NEW_DRAFT })
}

export const loadDrafts = (dispatch) => {
	const drafts = [
		{
			id: 'draft-1',
			name: 'Draft Killa',
			updatedAt: (moment().day(-2)).calendar(),
			products: [
				{name: 'Papel de bano grande'},
				{ name: 'Calabazas'},
				{name: 'Fresas congeladas'},
				{name: 'Queso paquete grande'},
				{name: 'Papel toalla paquete doble'},
				{name: 'Platanos'},
				{name: 'Hummus'},
				{name: 'Salsa verde casera Herdez'},
				{name: 'Atun en agua'},
				{name: 'Pasta coccion rapida'},
				{name: 'Verduras congeladas'},
				{name: 'Avena'},
				{name: 'Mandarinas'},
				{name: 'Pechugas de pollo'},
				{name: 'Salmon'},
			],
		},
		{
			id: 'draft-2',
			name: 'Miercoles de Plaza',
			updatedAt: moment().calendar(new Date()),
			products: [{}, {}, {}, {}, {}, {}, {}, {}, {}],
		},
		{
			id: 'draft-3',
			name: 'Cena viernes',
			updatedAt: moment(new Date().getTime() - (1000 * 60 * 60)).calendar(),
			products: [{}],
		},
		{
			id: 'draft-4',
			name: 'Draft Killa',
			updatedAt: moment().calendar(moment().day(-3)),
			products: [{}, {}, {}, {},],
		},
		{
			id: 'draft-5',
			name: 'Miercoles de Plaza',
			updatedAt: moment().calendar(new Date()),
			products: [{}, {}, {}, {}, {}, {}],
		},
		{
			id: 'draft-6',
			name: 'Cena viernes',
			updatedAt: (moment().subtract(6, 'days')).calendar(),
			products: [{}, {}],
		},
	];
	dispatch({ type: types.SET_DRAFTS, drafts });
}

export const loadLists = (dispatch) => {
	const lists = [
		{
			id: 'list-1',
			name: 'List Killa',
			products: [],
		},
		{
			id: 'list-2',
			name: 'Miercoles de Verduras',
			products: [],
		},
		{
			id: 'list-3',
			name: 'Cena jueves',
			products: [],
		},
		{
			id: 'list-4',
			name: 'Encargo edificio',
			products: [],
		},
		{
			id: 'list-5',
			name: 'Orale culeros',
			products: [],
		},
		{
			id: 'list-6',
			name: 'OFicina',
			products: [],
		},
	];
	dispatch({ type: types.SET_LISTS, lists });
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
