import React, { Fragment, useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../services/auth_service';

const PrivateRoute = ({ component: Component, ...rest }) => {
	const [ isLoading, setIsLoading ] = useState(true);
	const [ authorized, setAuthorized ] = useState(false);

	useEffect(() => {
		let token = localStorage.getItem('@potigarra/token');

		let didCancel = false;

		if (token === null) {
			!didCancel && setAuthorized(false);
			!didCancel && setIsLoading(false);

			return () => {
				didCancel = true;
			};
		}

		async function fetchData() {
			!didCancel && setIsLoading(true);

			// Sends a request to the server, and check if the user token is valid. If so, sets the variable to true. Otherwise, set authorized to false.
			(await isAuthenticated(token)) === true
				? !didCancel && setAuthorized(true)
				: !didCancel && setAuthorized(false);

			!didCancel && setIsLoading(false);
		}

		fetchData();
		return () => {
			didCancel = true;
		};
	}, []);

	return (
		<Fragment>
			{isLoading ? <div>Loading</div> : <Fragment />}
			{isLoading === false && (
				<Route
					{...rest}
					render={(props) => (authorized === true ? <Component {...props} /> : <Redirect to="/signin" />)}
				/>
			)}
		</Fragment>
	);
};

export default PrivateRoute;
