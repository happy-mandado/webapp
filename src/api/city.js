import gql from 'graphql-tag';

import Entity from './entity';
import Venue from './venue';
import { APIError } from './error';


class City extends Entity {
	constructor({ id, name }, client) {
		super(id, client)

		this.name = name;
	}

	getVenues() {
		return this._client.query({ query: gql`{ allVenues (filter: { city: { eq: ${this.id}}}, first: 100) { id name location { latitude longitude } } }` })
			.then((response) => this._assignVenues(response))
			.catch((error) => {
				console.error(error);
				throw new APIError('allVenues');
			});
	}

	_assignVenues({ data }) {
		return data.allVenues.map(
			(venue) => new Venue(venue, this._client)
		)
	}
}

export default City;
