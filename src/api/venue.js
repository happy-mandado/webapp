import gql from 'graphql-tag';

import Entity from './entity';
import Requirement from './requirement';
import { APIError } from './error';


class Venue extends Entity {
	constructor({ id, name, location }, client) {
		super(id, client)

		this.name = name;
		this.location = location;
	}

	getRequirements() {
		return this._client.query({ query: gql`{ allRequirements (filter: { venue: { eq: ${this.id}}}, first: 100) { id title step createdAt content venue { id } } }` })
			.then((response) => this._assignRequirements(response))
			.catch((error) => {
				console.error(error);
				throw new APIError('allRequirements')
			});
	}

	_assignRequirements({ data }) {
		return data.allRequirements.map(
			(requirement) => new Requirement(requirement, this._client)
		)
	}
}

export default Venue;
