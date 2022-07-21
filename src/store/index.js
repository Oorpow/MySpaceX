import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import bannerApi from './api/bannerApi'
import carouselApi from './api/carouselApi'
import virtualApi from './api/virtualApi'

const store = configureStore({
	reducer: {
		[bannerApi.reducerPath]: bannerApi.reducer,
		[virtualApi.reducerPath]: virtualApi.reducer,
		[carouselApi.reducerPath]: carouselApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(bannerApi.middleware)
			.concat(virtualApi.middleware)
			.concat(carouselApi.middleware),
})

setupListeners(store.dispatch)

export default store
