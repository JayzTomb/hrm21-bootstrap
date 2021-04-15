import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useHistory } from 'react-router-dom'
import { executeBasicAuthenticationService, registerSuccessfulLogin } from './../service/AuthenticationService'


const LoginComponent = () => {

	let history = useHistory();

	const [stateInfo, setStateInfo] = useState(
		{
			hasLoginFailed: false,
			showSuccessMessage: false,
			username: '',
			password: ''
		}
	)


	const changeHandler = e => {
		setStateInfo({ ...stateInfo, [e.target.name]: e.target.value })
	}

	const loginClicked = (e) => {
		let username = stateInfo.username;
		let password = stateInfo.password;
		e.preventDefault();
		executeBasicAuthenticationService(username, password)
			.then(() => {
				registerSuccessfulLogin(username, password)
				history.push(`/loggedUser`)
			}).catch(() => {
				setStateInfo({ showSuccessMessage: false })
				setStateInfo({ hasLoginFailed: true })
			})
	}

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
								{stateInfo.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
								{stateInfo.showSuccessMessage && <div>Login Successful</div>}
								<Form>
									<Form.Group controlId="formBasicUsername">
										<Form.Label>Username</Form.Label>
										<Form.Control type='text' name='username' placeholder="Enter username" onChange={changeHandler} />
									</Form.Group>
									<Form.Group controlId="formBasicPassword">
										<Form.Label>Password</Form.Label>
										<Form.Control type="password" name='password' placeholder="Enter password" onChange={changeHandler} />
									</Form.Group>
									<Button variant="primary" onClick={loginClicked} >Submit</Button>
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

export default LoginComponent