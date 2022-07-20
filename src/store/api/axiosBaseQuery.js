import request from './request'

export const axiosQuery = (
	{ baseUrl } = { baseUrl: 'http://localhost:1337/api/' }
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
