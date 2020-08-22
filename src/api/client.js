import Agent from './agent'
import Resource from './resource'
import User from './user'

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

	async user(user) {
		const response = await this._agent.get(
			User.path(user)
		)

		return new User(response, this._agent)
	}
}

export default Client;
