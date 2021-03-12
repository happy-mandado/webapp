import Client from './client';


const API = () => {
	let instance;

	const createInstance = (args) => {
		instance = new Client(args)
		return instance
	}

	return {
		client: (args) => {
			if (instance) {
				if (!args || instance.hasSameArguments(args)) {
					return instance
				}
			}

			return createInstance(args)
		},
	}
};

export default API();
