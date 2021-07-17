import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import 'fomantic-ui-css/semantic.min.css';

import store from './store';
import App from './App';
import Identity from './Identity';
import * as serviceWorker from './serviceWorker';
import './index.css';

import API from './api';

const config = {
	api: {
		host: process.env.REACT_APP_API_HOST,
		protocol: process.env.REACT_APP_API_PROTOCOL,
		version: process.env.REACT_APP_API_VERSION,
		port: process.env.REACT_APP_API_PORT,
		mock: process.env.REACT_APP_MOCK_USER_ID,
	},
}

API.client(config.api)

const routerRenderer = (props) => (
	<Provider store={store}>
		<Identity
			redirectTo={process.env.REACT_APP_LOGIN_URL}
			cookieName={process.env.REACT_APP_COOKIE_NAME}
			mockUserId={process.env.REACT_APP_MOCK_USER_ID}
			{...props}
		>
			<App />
		</Identity>
	</Provider>
);


ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route exact={true} path="/" render={routerRenderer}/>
			<Route exact={true} path="/login" render={routerRenderer}/>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
