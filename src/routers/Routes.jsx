import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Customers, Dashboard } from '../pages';

export const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact component={Dashboard} />
			<Route path='/customers' component={Customers} />
		</Switch>
	);
};
