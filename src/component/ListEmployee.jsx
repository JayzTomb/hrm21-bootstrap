import React, { Component } from 'react'
import EmployeeDataService from '../service/EmployeeDataService';
import Table from 'react-bootstrap/Table'

class ListEmployee extends Component {
	constructor(props) {
		super(props)

		this.state = {
			employees: [],
			message: null
		}

		this.getAndRefreshEmployees = this.getAndRefreshEmployees.bind(this)
	}

	componentDidMount() {
		this.getAndRefreshEmployees();
	}

	getAndRefreshEmployees() {
		EmployeeDataService.retrieveAllEmployees().then(
			response => {
				this.setState({ employees: response.data.content })
			}
		)
	}

	render() {
		return (
			<div>
				<div>
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th>#</th>
								<th>First Name</th>
								<th>Last Name</th>
								<th>Mobile</th>
								<th>Address</th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.employees.map(
									employee =>
										<tr key={employee.empId}>
											<td>{employee.empId}</td>
											<td>{employee.firstName}</td>
											<td>{employee.lastName}</td>
											<td>{employee.mobile}</td>
											<td>{employee.address}</td>
										</tr>
								)}
						</tbody>
					</Table>
				</div>
			</div>
		)
	}
}

export default ListEmployee