import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { axiosQuery } from './axiosBaseQuery'

const realApi = createApi({
	reducerPath: 'realApi',
	baseQuery: axiosQuery(),
	endpoints(build) {
		return {
			getRealCarousel: build.query({
                query() {
                    return {
                        url: 'real'
                    }
                }
            })
		}
	},
})

export const { useGetRealCarouselQuery } = realApi
export default realApi
