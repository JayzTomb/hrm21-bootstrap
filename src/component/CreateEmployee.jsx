import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const CreateEmployee = () => {

	const history = useHistory();

	const toBackPage = () => {
		history.push('employees');
	}

	const [userAvatar, setUserAvatar] = useState('')

	const [employeeBean, setEmployeeBean] = useState(
		{
			firstName: '',
			lastName: '',
			mobile: '',
			address: '',
			avatar: '',
			department: { departmentId: 1 }
		}
	)

	const getAvatar = async () => {
		const users = await axios.get('https://randomuser.me/api');
		setUserAvatar(users.data.results[0].picture.large);
		console.log(JSON.stringify(users.data.results[0].picture.large))
	};
	useEffect(() => {
		getAvatar();
	}, []);

	const employeeFormChangeHandler = (event) => {
		setEmployeeBean({ ...employeeBean, [event.target.name]: event.target.value })
	}

	const employeeFormSubmit = (event) => {
		event.preventDefault()
		employeeBean.avatar = userAvatar
		console.log('employeeBean : ' + JSON.stringify(employeeBean))

		fetch('http://34.68.247.223:8080/api/v1/employee', {
			method: 'POST',
			body: JSON.stringify(employeeBean),
			headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic c29hczpzb2Fz' },
		})
			.then(response => response.json())
			.then(json => setEmployeeBean(json.user))
	}

	return (
		<div>
			<Form onSubmit={employeeFormSubmit}>
				<Form.Group as={Row} controlId="firstNameTxt">
					<Form.Label column sm={2} >First Name</Form.Label>
					<Col sm={10}>
						<Form.Control type="text" name='firstName' onChange={employeeFormChangeHandler} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="lastNameTxt">
					<Form.Label column sm={2} >Last Name</Form.Label>
					<Col sm={10}>
						<Form.Control type="text" name='lastName' onChange={employeeFormChangeHandler} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="mobileTxt">
					<Form.Label column sm={2}  >Mobile</Form.Label>
					<Col sm={10}>
						<Form.Control type="text" name='mobile' onChange={employeeFormChangeHandler} />
					</Col>
				</Form.Group>
				<Form.Group as={Row} controlId="addressTxt">
					<Form.Label column sm={2}  >Address</Form.Label>
					<Col sm={10}>
						<Form.Control type="text" name='address' onChange={employeeFormChangeHandler} />
					</Col>
				</Form.Group>


				<Button variant="primary" type="submit" className="mr-2">Submit</Button>
				<Button variant="primary" onClick={toBackPage} className="mr-2">Back</Button>
			</Form>
		</div>
	)
}

export default CreateEmployee