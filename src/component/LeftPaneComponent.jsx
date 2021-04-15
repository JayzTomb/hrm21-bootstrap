import React from 'react'
import { ListGroup } from 'react-bootstrap'

const LeftPaneComponent = () => {

	const adminFunc = () => {
		console.log('admin Func')
	}

	return (
		<div className="leftScrollbar" id="style-4">
			<ListGroup as="ul">
				<ListGroup.Item action onClick={adminFunc} as="li">Admin</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Employees</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Admin Reports</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">System</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Insights</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Payroll</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Recruitment</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Discussions</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Personal Information</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Leave</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Time Management</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Documents</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Company</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Training</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Performance</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Travel Management</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">Finance</ListGroup.Item>
				<ListGroup.Item action onClick={adminFunc} as="li">User Reports</ListGroup.Item>
			</ListGroup>
		</div >
	)

}

export default LeftPaneComponent