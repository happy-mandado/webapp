import Agent from './agent'
import Resource from './resource'

class Client extends Resource {
	constructor({ protocol, host, port, token, version }) {
		super(
			new Agent(protocol, host, port, version, token)
		)

		this._protocol = protocol
		this._host = host
		this._port = port
		this._token = token
		this._version = version
	}

	hasSameArguments({ protocol, host, port, token , version }) {
		return (
			this._protocol === protocol &&
			this._host === host &&
			this._port === port &&
			this._token === token &&
			this._version === version
		)
	}

	setToken(token) {
		this._token = token
		this._agent = new Agent(
			this._protocol, this._host, this._port, this._version, this._token
		)
	}

	_getUsersPath() {
		return `/users`;
	}

	_getUserProductsPath(userId) {
		return `/users/${userId}/products`;
	}

	_getUserDraftsPath(userId) {
		return `/users/${userId}/drafts`;
	}

	_getUserDraftProductsPath(userId, draftId) {
		return `/users/${userId}/drafts/${draftId}/products`;
	}

	_getUserListsPath(userId) {
		return `/users/${userId}/lists`;
	}

	async readUser(userId) {
		const path = `${this._getUsersPath()}/${userId}`;
		return await this._agent.get(path);
	}

	async readUserProducts(userId) {
		const path = this._getUserProductsPath(userId);
		return await this._agent.get(path);
	}

	async createUserDraft(userId, draft) {
		const path = this._getUserDraftsPath(userId);
		return await this._agent.post(path, draft);
	}

	async readUserDrafts(userId) {
		const path = this._getUserDraftsPath(userId);
		return await this._agent.get(path);
	}

	async createUserList(userId, draftId, products) {
		const path = this._getUserListsPath(userId);
		const list = { draftId, products };
		return await this._agent.post(path, list);
	}

	async readUserDraftProducts(userId, draftId) {
		const path = this._getUserDraftProductsPath(userId, draftId);
		return await this._agent.get(path);
	}

	async createUserDraftProduct(userId, draftId, product) {
		const path = this._getUserDraftProductsPath(userId, draftId);
		return await this._agent.post(path, product);
	}

	async removeUserDraftProduct(userId, draftId, productId) {
		const path = `${this._getUserDraftProductsPath(userId, draftId)}/${productId}`;
		return await this._agent.delete(path);
	}
}

export default Client;
