import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

import PrivateRoute from './components/PrivateRoute';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/signin" component={Login} />
				<Route exact path="/register" component={Register} />
				<PrivateRoute exact path="/" component={Dashboard} />
			</Switch>
		</BrowserRouter>
	);
}
