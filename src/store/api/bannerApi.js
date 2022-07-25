import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { axiosQuery } from './axiosBaseQuery'

const bannerApi = createApi({
	reducerPath: 'bannerApi',
	baseQuery: axiosQuery(),
	endpoints(build) {
		return {
			getBannerImg: build.query({
				query() {
					return {
						url: 'banner',
					}
				},
			}),
		}
	},
})

export const { useGetBannerImgQuery } = bannerApi
export default bannerApi
