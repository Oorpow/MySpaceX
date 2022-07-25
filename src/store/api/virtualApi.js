import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { axiosQuery } from './axiosBaseQuery'

const virtualApi = createApi({
	reducerPath: 'bannerApi',
	baseQuery: axiosQuery(),
	endpoints(build) {
		return {
			getVirtualImg: build.query({
				query() {
					return {
						url: 'virtual',
					}
				},
			}),
		}
	},
})

export const { useGetVirtualImgQuery } = virtualApi
export default virtualApi
