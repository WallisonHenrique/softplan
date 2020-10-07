import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/Home/Home';
import Details from '../components/Details/Details';
import Edit from '../components/Edit/Edit';

export default function Routes () {
	return (
		<Router>
			<Switch>
				<Route path="/softplan" exact={true} component={ Home } />
				<Route path="/softplan/:id" exact={true} render={ ({ match }) => <Details match={ match } />} />
				<Route path="/softplan/editar/:id" render={ routeProps => <Edit { ...routeProps } />} />
				<Redirect to="/softplan" />
			</Switch>
		</Router>
	);
}