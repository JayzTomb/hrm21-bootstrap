import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { isUserLoggedIn, logout } from './../service/AuthenticationService'

class MenuComponent extends Component {
	render() {

		return (
			<header>
				<Navbar className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-4">
					<span className="navbar-brand mb-0 h1">HRM21</span>
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/quick-access">Quick Access</Nav.Link>
						<Nav.Link href="/setting">Settings</Nav.Link>
					</Nav>
					<Nav >
						{!isUserLoggedIn && <Nav.Link className="nav-link" href="/login">Login</Nav.Link>}
						{isUserLoggedIn && <Nav.Link className="nav-link" onClick={logout()} href="/logout">Logout</Nav.Link>}
					</Nav>
				</Navbar>
			</header>
		)
	}
}

export default withRouter(MenuComponent)