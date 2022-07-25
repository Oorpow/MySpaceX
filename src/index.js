import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router, HashRouter } from 'react-router-dom'
import '../src/assets/css/reset.css'
// import './index.css'
import './index.less'
import 'antd/dist/antd.css'
import { Provider } from 'react-redux'
import store from './store'
import 'animate.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>
	// </React.StrictMode>
)
