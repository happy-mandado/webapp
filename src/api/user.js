import Agent from './agent'
import Resource from './resource'
import List from './list'
import Suggestion from './suggestion'
import Draft from './draft'

class User extends Resource {
	constructor({ id, }, agent) {
		super(agent)

		this.id = id
	}

	static path({ id }) {
		return `/users/${id}`
	}

	async createDraft(draft) {
		const response = await this._agent.post(
			`${User.path(this)}/drafts`, draft
		)

		return new Draft(response, this._agent)
	}

	async createList(list) {
		const response = await this._agent.post(
			`${User.path(this)}/lists`, list
		)

		return new List(response, this._agent)
	}

	async createSuggestion(suggestion) {
		const response = await this._agent.post(
			`${User.path(this)}/suggestions`, suggestion
		)

		return new Suggestion(response, this._agent)
	}

	async draft(draft) {
		const userDraft = Object.assign(draft, { userId: this.id })
		const response = await this._agent.get(
			`${Draft.path(userDraft)}`
		)

		return new List(response, this._agent)
	}

	drafts() {
		const response = this._agent.get(
			`${User.path(this)}/drafts`
		)

		return response.map(
			(draft) => {
				const userDraft = Object.assign(draft, { userId: this.id })
				return new Draft(userDraft, this._agent)
			}
		)
	}

	async list(list) {
		const userList = Object.assign(list, { userId: this.id })
		const response = await this._agent.get(
			`${List.path(userList)}`
		)

		return new List(response, this._agent)
	}

	lists() {
		const response = this._agent.get(
			`${User.path(this)}/lists`
		)

		return response.map(
			(list) => {
				const userList = Object.assign(list, { userId: this.id })
				return new List(userList, this._agent)
			}
		)
	}

	async suggestion(suggestion) {
		const userSuggestion = Object.assign(suggestion, { userId: this.id })
		const response = await this._agent.get(
			`${Suggestion.path(userSuggestion)}`
		)

		return new Suggestion(response, this._agent)
	}

	suggestions() {
		const response = this._agent.get(
			`${User.path(this)}/suggestions`
		)

		return response.map(
			(suggestion) => {
				const userSuggestion = Object.assign(
					suggestion, { userId: this.id }
				)
				return new Suggestion(suggestion, this._agent)
			}
		)
	}
}

export default User;
