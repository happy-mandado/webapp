
class Entity {
	constructor(id, client) {
		this.id = id;
		this._client = client;

		if (!client) {
			throw Error('Missing client');
		}
	}
}

export default Entity;
