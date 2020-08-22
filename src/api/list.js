import Resource from './resource'

class List extends Resource {
	constructor({ id, userId }, agent) {
		super(agent)

		this.id = id
		this.userId = userId
	}

	static path({ id, userId }) {
		return `/users/${userId}/lists/${id}`
	}

	async update(list) {
		const response = await this._agent.put(
			`${List.path(this)}`, list
		)

		return new List(response, this._agent)
	}

	async delete() {
		const response = await this._agent.delete(
			`${List.path(this)}`
		)

		return new List(response, this._agent)
	}
}

export default List;
