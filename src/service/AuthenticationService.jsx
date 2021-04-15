import axios from 'axios'

const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
const API_URL = 'http://localhost:8080/api/v1'

//const AuthenticationService = () => {

export const executeBasicAuthenticationService = (username, password) => {
	return axios.get(`${API_URL}/basicauth`,
		{
			headers: { authorization: createBasicAuthToken(username, password) }
		})
}

export const createBasicAuthToken = (username, password) => {
	return 'Basic ' + window.btoa(username + ':' + password)
}

export const registerSuccessfulLogin = (username, password) => {
	sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
	setupAxiosInterceptors(createBasicAuthToken(username, password))
}

export const logout = () => {
	sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
}

export const getLoggedInUserName = () => {
	let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
	if (user === null) {
		return ''
	}
	return user
}

export const isUserLoggedIn = () => {
	let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
	if (user == null) {
		return false
	}
	return true
}

export const setupAxiosInterceptors = (token) => {
	axios.interceptors.request.use(
		(config) => {
			if (isUserLoggedIn()) {
				config.headers.authorization = token
			}
			return config
		}
	)
}
//}

//export default AuthenticationService