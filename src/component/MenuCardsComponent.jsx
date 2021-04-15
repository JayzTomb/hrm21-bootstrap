import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const MenuCardsComponent = () => {

	return (
		<div>
			<table>
				<thead></thead>
				<tbody>
					<tr>
						<td>
							<Card bg='dark' text='white' border="primary" style={{ width: '18rem', height: '10rem' }}>
								<Card.Header>People</Card.Header>
								<Card.Body>
									<Card.Title>4 employees</Card.Title>
									<Card.Text><Link to="/employees">Click here</Link> to Manage Employees</Card.Text>
								</Card.Body>
							</Card>
						</td>
						<td>
							<Card bg='dark' text='white' border="primary" style={{ width: '18rem', height: '10rem' }}>
								<Card.Header>Company</Card.Header>
								<Card.Body>
									<Card.Title>3 Departments</Card.Title>
									<Card.Text>Click here to Manage Company</Card.Text>
								</Card.Body>
							</Card>
						</td>
						<td>
							<Card bg='dark' text='white' border="primary" style={{ width: '18rem', height: '10rem' }}>
								<Card.Header>Users</Card.Header>
								<Card.Body>
									<Card.Title>1 Users</Card.Title>
									<Card.Text>Click here to Manage Users</Card.Text>
								</Card.Body>
							</Card>
						</td>
					</tr>
					<tr>
						<td>
							<Card bg='dark' text='white' border="primary" style={{ width: '18rem', height: '10rem' }}>
								<Card.Header>Projects</Card.Header>
								<Card.Body>
									<Card.Title>4 Active Projects</Card.Title>
									<Card.Text>Click here to Manage Clients/Projects</Card.Text>
								</Card.Body>
							</Card>
						</td>
						<td>
							<Card bg='dark' text='white' border="primary" style={{ width: '18rem', height: '10rem' }}>
								<Card.Header>Attendance</Card.Header>
								<Card.Body>
									<Card.Title>0 Entries Last Week</Card.Title>
									<Card.Text>Click here to Monitor Attendance</Card.Text>
								</Card.Body>
							</Card>
						</td>
						<td>
							<Card bg='dark' text='white' border="primary" style={{ width: '18rem', height: '10rem' }}>
								<Card.Header>Leave</Card.Header>
								<Card.Body>
									<Card.Title>0 Upcoming</Card.Title>
									<Card.Text>Click here to Leave Management</Card.Text>
								</Card.Body>
							</Card>
						</td>
					</tr>
					<tr>
						<td>
							<Card bg='dark' text='white' border="primary" style={{ width: '18rem', height: '10rem' }}>
								<Card.Header>Reports</Card.Header>
								<Card.Body>
									<Card.Title>View/Download Reports</Card.Title>
									<Card.Text>Click here to Generate a Report</Card.Text>
								</Card.Body>
							</Card>
						</td>
						<td>
							<Card bg='dark' text='white' border="primary" style={{ width: '18rem', height: '10rem' }}>
								<Card.Header>HR Form/Document</Card.Header>
								<Card.Body>
									<Card.Title>Management</Card.Title>
									<Card.Text>Click here to Manage Forms</Card.Text>
								</Card.Body>
							</Card>
						</td>
						<td>
							<Card bg='dark' text='white' border="primary" style={{ width: '18rem', height: '10rem' }}>
								<Card.Header>Settings</Card.Header>
								<Card.Body>
									<Card.Title>Configure HRM21</Card.Title>
									<Card.Text>Click here to Update Settings</Card.Text>
								</Card.Body>
							</Card>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default MenuCardsComponent