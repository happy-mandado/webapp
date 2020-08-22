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
console.log(config.api)
const api = API.client(config.api)


export const selectSection = (section, dispatch) => {
	dispatch({ type: types.SET_SECTION, section })
}

export const selectDraft = (draft, dispatch) => {
	dispatch({ type: types.SET_DRAFT, draft })
}

export const createDraft = (dispatch) => {
	dispatch({ type: types.CREATE_DRAFT })
}

export const deleteDraft = (dispatch) => {
	dispatch({ type: types.REMOVE_DRAFT })
}

export const updateDraft = (dispatch) => {
}

export const loadDraft = (dispatch) => {
}

export const loadDrafts = (dispatch) => {
	const drafts = [
		{
			id: 'draft-1',
			name: 'Mandado semana 17',
			updatedAt: (moment().day(-2)).calendar(),
			products: [
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
				{id: '16', name: 'Papel de bano grande'},
				{id: '17',  name: 'Calabazas'},
				{id: '18', name: 'Fresas congeladas'},
				{id: '19', name: 'Queso paquete grande', onTime: true},
				{id: '20', name: 'Papel toalla paquete doble'},
				{id: '21', name: 'Platanos'},
				{id: '22', name: 'Hummus'},
				{id: '23', name: 'Salsa verde casera Herdez', early: '1 day'},
				{id: '24', name: 'Atun en agua'},
				{id: '25', name: 'Pasta coccion rapida'},
				{id: '26', name: 'Verduras congeladas'},
				{id: '27', name: 'Avena'},
				{id: '28', name: 'Mandarinas'},
				{id: '29', name: 'Pechugas de pollo'},
				{id: '30', name: 'Salmon'},
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

export const selectList = () => {
}

export const createList = (dispatch) => {
	// coming from a draft
}

export const loadList = () => {
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

export const loadUser = async (dispatch, userId) => {
	// Call api
	const user = api.user({id: userId})
	dispatch({ type: types.SET_USER, user })
}

export const loadSuggestions = (dispatch) => {
	const suggestions = [
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
		{id: '13', name: 'Hummus'},
		{id: '14', name: 'Salsa verde casera Herdez'},
		{id: '15', name: 'Atun en agua'},
		{id: '16', name: 'Pasta coccion rapida'},
		{id: '17', name: 'Calabazas', early: '5 days'},
		{id: '18', name: 'Platanos'},
		{id: '19', name: 'Hummus'},
		{id: '20', name: 'Salsa verde casera Herdez'},
		{id: '21', name: 'Atun en agua'},
		{id: '22', name: 'Pasta coccion rapida'},
	];
	dispatch({ type: types.SET_SUGGESTIONS, suggestions });
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
