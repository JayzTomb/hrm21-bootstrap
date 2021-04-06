import axios from 'axios'

const PREFIX = 'http://localhost:8080'
const SUFFIX = 'api/v1/employee'
const EMPLOYEE_API_URL = `${PREFIX}/${SUFFIX}`

class EmployeeDataService {

	retrieveAllEmployees() {
		return axios.get(`${EMPLOYEE_API_URL}`);
	}
}

export default new EmployeeDataService()