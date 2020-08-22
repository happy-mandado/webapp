import Resource from './resource'

class Draft extends Resource {
	constructor({ id, userId }, agent) {
		super(agent)

		this.id = id
		this.userId = userId
	}

	static path({ id, userId }) {
		return `/users/${userId}/drafts/${id}`
	}

	async update(draft) {
		const response = await this._agent.put(
			`${Draft.path(this)}`, draft
		)

		return new Draft(response, this._agent)
	}

	async delete() {
		const response = await this._agent.delete(
			`${Draft.path(this)}`
		)

		return new Draft(response, this._agent)
	}
}

export default Draft;
