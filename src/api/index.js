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
				return instance.hasSameArguments(args) && instance
			}

			return createInstance(args)
		},
	}
};

export default API();
