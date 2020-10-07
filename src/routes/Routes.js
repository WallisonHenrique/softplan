import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';
import Details from '../components/Details/Details';
import Edit from '../components/Edit/Edit';

export default function Routes () {
	return (
		<Router>
			<Switch>
				<Route path="/inicio" component={ Home } />
				<Route path="/pais/:id" render={ ({ match }) => <Details match={ match } />} />
				<Route path="/editar/:id" render={ routeProps => <Edit { ...routeProps } />} />
				<Redirect to="/inicio" />
			</Switch>
		</Router>
	);
}