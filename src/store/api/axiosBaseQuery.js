import request from './request'

export const axiosQuery = (
	{ baseUrl } = { baseUrl: process.env.REACT_APP_SERVER_URL + 'api/' }
) => {
	return ({ url, method, data, params }) => {
		return request({
			url: baseUrl + url,
			method,
			data,
			params,
		})
	}
}
