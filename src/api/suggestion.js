import Resource from './resource'

class Suggestion extends Resource {
	constructor({ id, userId }, agent) {
		super(agent)

		this.id = id
		this.userId = userId
	}

	static path({ id, userId }) {
		return `/users/${userId}/suggestions/${id}`
	}

	async update(suggestion) {
		const response = await this._agent.put(
			`${Suggestion.path(this)}`, suggestion
		)

		return new Suggestion(response, this._agent)
	}

	async delete() {
		const response = await this._agent.delete(
			`${Suggestion.path(this)}`
		)

		return new Suggestion(response, this._agent)
	}
}

export default Suggestion;
