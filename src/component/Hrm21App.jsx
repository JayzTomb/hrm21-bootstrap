import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginComponent from './LoginComponent'
import LogoutComponent from './LogoutComponent'
import MenuComponent from './MenuComponent';
import ListEmployee from './ListEmployee'
import AuthenticatedRoute from './AuthenticatedRoute'

import 'bootstrap/dist/css/bootstrap.min.css';
import LoggedUserComponent from './loggedUserComponent';

class Hrm21App extends Component {
	render() {
		return (
			<>
				<Router>
					<>
						<MenuComponent />
						<Switch>
							<Route path="/" exact component={LoginComponent} />
							<Route path="/loggedUser" exact component={LoggedUserComponent} />
							<Route path="/login" exact component={LoginComponent} />
							<AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
							<AuthenticatedRoute path="/employees" exact component={ListEmployee} />
						</Switch>
					</>
				</Router>
			</>
		)
	}
}

export default Hrm21App