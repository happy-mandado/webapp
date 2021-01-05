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
		console.debug('call: ', url, headers, body);

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
				if (response.status < 200 || response.status >= 300) {
					console.debug(response);
					return response.json()
						.then((body) => {
							throw new AgentError(
								response.status, JSON.stringify(body)
							);
						});
				}

				return response.json();
			})
			.then(response => console.debug(response) || response)
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
	
}

export default Agent;
