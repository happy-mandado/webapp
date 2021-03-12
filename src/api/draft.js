import Resource from './resource'
import Product from './product'

class Draft extends Resource {
	constructor({ id, name, closedAt, deletedAt, userId }, agent) {
		super(agent)

		this.id = id
		this.userId = userId
		this.name = name
		this.closedAt = closedAt
		this.deletedAt = deletedAt
	}

	getPath() {
		return `/users/${this.userId}/drafts/${this.id}`
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
