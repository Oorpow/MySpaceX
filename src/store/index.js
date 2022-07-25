import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import bannerApi from './api/bannerApi'
import carouselApi from './api/carouselApi'
import realApi from './api/realApi'
import virtualApi from './api/virtualApi'

const store = configureStore({
	reducer: {
		[bannerApi.reducerPath]: bannerApi.reducer,
		[virtualApi.reducerPath]: virtualApi.reducer,
		[carouselApi.reducerPath]: carouselApi.reducer,
		[realApi.reducerPath]: realApi.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(bannerApi.middleware)
			.concat(virtualApi.middleware)
			.concat(carouselApi.middleware)
			.concat(realApi.middleware),
})

setupListeners(store.dispatch)

export default store
