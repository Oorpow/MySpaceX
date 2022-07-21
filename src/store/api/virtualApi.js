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
						url: 'virtuals',
					}
				},
			}),
			getVirtualCarousel: build.query({
				query() {
					return {
						url: 'virtual-carousels',
					}
				},
			}),
		}
	},
})

export const { useGetVirtualImgQuery, useGetVirtualCarouselQuery } = virtualApi
export default virtualApi
