import Resource from './resource'

class Product extends Resource {
	constructor({ id, name, userId, draftId }, agent) {
		super(agent)

		this.id = id
		this.name = name
		this.userId = userId
		this.draftId = draftId
	}

	path() {
		return `/users/${this.userId}/drafts/${this.draftId}/products/${this.id}`
	}

	async update(Product) {
		const response = await this._agent.put(
			`${Product.path(this)}`, Product
		)

		return new Product(response, this._agent)
	}

	async delete() {
		const response = await this._agent.delete(
			`${Product.path(this)}`
		)

		return new Product(response, this._agent)
	}
}

export default Product;
