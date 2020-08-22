
export class APIError extends Error {
	constructor(message) {
		super()

		this.name = 'API Error'
		this.messsage = 'Request error - ' + message
	}
}
