import React, { Component } from 'react'

import ListEmployee from './ListEmployee'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class LoggedUserComponent extends Component {
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col sm={4} style={{ overflowY: 'auto' ,maxHeight:'500px'}}>
							<ListGroup as="ul">
								<ListGroup.Item as="li">Admin</ListGroup.Item>
								<ListGroup.Item as="li">Employees</ListGroup.Item>
								<ListGroup.Item as="li">Admin Reports</ListGroup.Item>
								<ListGroup.Item as="li">System</ListGroup.Item>
								<ListGroup.Item as="li">Insights</ListGroup.Item>
								<ListGroup.Item as="li">Payroll</ListGroup.Item>
								<ListGroup.Item as="li">Recruitment</ListGroup.Item>
								<ListGroup.Item as="li">Discussions</ListGroup.Item>
								<ListGroup.Item as="li">Personal Information</ListGroup.Item>
								<ListGroup.Item as="li">Leave</ListGroup.Item>
								<ListGroup.Item as="li">Time Management</ListGroup.Item>
								<ListGroup.Item as="li">Documents</ListGroup.Item>
								<ListGroup.Item as="li">Company</ListGroup.Item>
								<ListGroup.Item as="li">Training</ListGroup.Item>
								<ListGroup.Item as="li">Performance</ListGroup.Item>
								<ListGroup.Item as="li">Travel Management</ListGroup.Item>
								<ListGroup.Item as="li">Finance</ListGroup.Item>
								<ListGroup.Item as="li">User Reports</ListGroup.Item>
							</ListGroup>
						</Col>
						<Col sm={8}><ListEmployee /></Col>
					</Row>
				</Container>
			</div>
		)
	}
}

export default LoggedUserComponent