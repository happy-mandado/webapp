import gql from 'graphql-tag';

import Entity from './entity';
import City from './city';
import { APIError } from './error'


class State extends Entity {
	constructor({ id, name }, client) {
		super(id, client)

		this.name = name;
	}

	getCities() {
		return this._client.query({ query: gql`{ allCities (filter: { state: { eq: ${this.id}}}, first: 100) { id name } }` })
			.then((response) => this._assignCities(response))
			.catch((error) => {
				console.error(error);
				throw new APIError('allCities');
			});
	}

	_assignCities({ data }) {
		return data.allCities.map(
			(city) => new City(city, this._client)
		)
	}
}

export default State;
