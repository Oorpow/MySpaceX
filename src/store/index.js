import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import bannerApi from './api/bannerApi'
import virtualApi from './api/virtualApi'

const store = configureStore({
	reducer: {
		[bannerApi.reducerPath]: bannerApi.reducer,
		[virtualApi.reducerPath]: virtualApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(bannerApi.middleware)
			.concat(virtualApi.middleware),
})

setupListeners(store.dispatch)

export default store
