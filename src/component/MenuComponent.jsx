import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService'
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class MenuComponent extends Component {
	render() {
		const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
		return (
			<header>
				<Navbar bg="dark" variant="dark">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/quick-access">Quick Access</Nav.Link>
						<Nav.Link href="/setting">Settings</Nav.Link>
					</Nav>
					<Nav >
						{!isUserLoggedIn && <Nav.Link className="nav-link" href="/login">Login</Nav.Link>}
						{isUserLoggedIn && <Nav.Link className="nav-link" href="/logout">Logout</Nav.Link>}
					</Nav>
				</Navbar>
			</header>
		)
	}
}

export default withRouter(MenuComponent)