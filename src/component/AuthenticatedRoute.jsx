import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isUserLoggedIn } from '../service/AuthenticationService'


const AuthenticatedRoute = (props) => {

	if (isUserLoggedIn()) {
		return <Route {...props} />
	} else {
		return <Redirect to="/login" />
	}
}

export default AuthenticatedRoute