import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import gql from 'graphql-tag';

import State from './state';
import states from './states.json'


const token = '98b1e31312f5d4373c5233872a90ea'; // process.env.API_TOKEN

const httpLink = createHttpLink({
	uri: 'https://graphql.datocms.com/',
});

const authLink = setContext((_, { headers }) => {
	return {
		headers: Object.assign(
			headers || {},
			{
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'Authorization': `Bearer ${token}`,
			}
		)
	};
});


class API {
	constructor() {
		this._client = new ApolloClient({
			link: authLink.concat(httpLink),
			cache: new InMemoryCache(),
		});
	}

	getStates() {
		/*
		return this._client.query({ query: gql`{ allStates { id name } }` })
			.then(this._assignStates)
			.catch((error) => { throw new APIError('allStates') });
		*/
		return this._assignStates(states);
	}

	_assignStates({ data }) {
		return data.allStates.map(
			(state) => new State(state, this._client)
		)
	}
}

export default API;
