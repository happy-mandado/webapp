import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import 'fomantic-ui-css/semantic.min.css';

import store from './store';
import App from './App';
import Login from './sections/login-section';
import Secure from './components/secure/Secure';
import * as serviceWorker from './serviceWorker';
import './index.css';


const index = (props) => {
	props.redirectTo = null;
	props.cookieName = process.env.REACT_APP_COOKIE_NAME;
	props.content = ({ userId }) => {

		if (!userId) {
			return (
				<Provider store={store}>
					<Login loginURL={process.env.REACT_APP_LOGIN_URL}/>
				</Provider>
			);
		}

		return (
			<Provider store={store}>
				<App userId={userId}/>
			</Provider>
		)
	};

	return (
		<CookiesProvider>
			<Secure {...props}/>
		</CookiesProvider>
	);
};


ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route exact={true} path="/" render={index}/>
			<Route exact={true} path="/login" render={index}/>
		</Router>,
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
