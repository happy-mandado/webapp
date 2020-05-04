import API from './api';


const Singleton = () => {
	let instance;

	const createInstance = (args) => {
	  return new API(args)
	}

	return {
		getInstance: (args) => instance || createInstance(args),
	}
};

export default Singleton;
