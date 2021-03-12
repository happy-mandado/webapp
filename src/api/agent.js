class AgentError extends Error {
	constructor(statusCode, message) {
		super(message);

		this.statusCode = statusCode;
	}
}

class Agent {
	constructor(protocol, host, port, version, token) {
		this._baseURL = Agent.createBaseURL(protocol, host, port, version)
		this._headers = {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		};
	}

	static createBaseURL(protocol, host, port, version) {
		const portSuffix = port ? `:${port}` : '';
		return `${protocol}://${host}${portSuffix}/${version}`
	}

	_call(path, method, body, headers = {}) {
		const url = `${this._baseURL}${path}`
		console.debug('call: ', { url, headers, body });

		const request = new Request(
			url,
			{
				method,
				credentials: 'include',
				headers: Object.assign(this._headers, headers),
				body: JSON.stringify(body),
			}
		);

		return fetch(request)
			.then((response) => {
				if (response.status === 401) {
					return window.location = process.env.REACT_APP_LOGOUT_URL;
				}

				if (response.status < 200 || response.status >= 300) {
					return response.json()
						.then((body) => {
							response.error = body.error;
							console.debug('response: ', response);
							throw new AgentError(
								response.status, body.error
							);
						});
				}

				return response.json();
			})
			.then((body) => {
				console.debug('response: ', body);
				return body;
			})
			.catch((error) => {
				console.error(error);
				return Promise.reject(error);
			});
	}

	get(path, query = '') {
		return this._call(path + query, 'GET');
	}

	post(path, body) {
		return this._call(path, 'POST', body);
	}

	put(path, body) {
		return this._call(path, 'PUT', body);
	}

	delete(path) {
		return this._call(path, 'DELETE');
	}
}

export default Agent;
