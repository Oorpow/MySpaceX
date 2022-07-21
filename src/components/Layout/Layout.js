import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import Header from '../common/Header/Header'
import Falcon from '../../pages/Falcon/Falcon'
import FalconHeavy from '../../pages/FalconHeavy'
import Footer from '../common/Footer/Footer'
import styles from './Layout.module.less'

const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<div className={styles.layout_content}>
				<Routes>
					<Route path='/' element={<Navigate to='/falcon' />} />
					<Route path="/falcon" element={<Falcon />} />
					<Route path="/falcon-heavy" element={<FalconHeavy />} />
				</Routes>
			</div>
			<Footer />
		</div>
	)
}

export default Layout
