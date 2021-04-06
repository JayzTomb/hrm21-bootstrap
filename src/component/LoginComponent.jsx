import React, { Component } from 'react'
import AuthenticationService from '../service/AuthenticationService'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class LoginComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			hasLoginFailed: false,
			showSuccessMessage: false
		}
		this.handleChange = this.handleChange.bind(this)
		this.loginClicked = this.loginClicked.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	loginClicked() {
		//console.log('username : ' + this.state.username + ' & password : ' + this.state.password)
		AuthenticationService
			.executeBasicAuthenticationService(this.state.username, this.state.password)
			.then(() => {
				AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
				this.props.history.push(`/loggedUser`)
			}).catch(() => {
				this.setState({ showSuccessMessage: false })
				this.setState({ hasLoginFailed: true })
			})
	}

	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col sm></Col>
						<Col sm>
							<Card style={{ width: '20rem' }}>
								<Card.Body>
									<Card.Title>Log into HRM21</Card.Title>
									<Card.Text style={{ fontSize: '14px', textAlign: "justify" }}>To keep connected with us please login with your personal information by username and password</Card.Text>

									{this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
									{this.state.showSuccessMessage && <div>Login Successful</div>}
									<Form>
										<Form.Group controlId="formBasicUsername">
											<Form.Label>Username</Form.Label>
											<Form.Control type='text' name='username' placeholder="Enter username" defaultValue={this.state.username} onChange={this.handleChange} />
										</Form.Group>
										<Form.Group controlId="formBasicPassword">
											<Form.Label>Password</Form.Label>
											<Form.Control type="password" name='password' placeholder="Enter password" defaultValue={this.state.password} onChange={this.handleChange} />
										</Form.Group>
										<Button variant="primary" onClick={this.loginClicked} >Submit</Button>
									</Form>
								</Card.Body>
							</Card>
						</Col>
						<Col sm></Col>
					</Row>
				</Container>

			</div>
		)
	}
}

export default LoginComponent