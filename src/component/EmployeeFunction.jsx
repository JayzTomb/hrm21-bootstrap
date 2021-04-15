import React from 'react'

const EmployeeFunction = (props) => {

	return (
		<li className="list-group-item shadow-sm mb-2">
			<div className="row align-items-center">
				<table>
					<thead></thead>
					<tbody>
						<tr><td><div className="col-2">
							<img src={props.avatar} alt={props.fullName} className="border border-dark rounded-circle shadow-sm" />
						</div></td>
							<td>
								<h6>{props.fullName}</h6>
								<p> {props.mobile} | {props.address}</p>
								<p>{props.departmentName} | {props.departmentType}</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</li>

	)
}

export default EmployeeFunction