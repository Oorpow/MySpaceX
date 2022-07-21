import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { axiosQuery } from './axiosBaseQuery'

const carouselApi = createApi({
	reducerPath: 'carouselApi',
	baseQuery: axiosQuery(),
	endpoints(build) {
		return {
			getCarousel: build.query({
				query() {
					return {
						url: 'carousels',
					}
				},
			}),
		}
	},
})

export const { useGetCarouselQuery } = carouselApi
export default carouselApi
