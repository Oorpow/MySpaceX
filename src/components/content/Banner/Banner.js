import React from 'react'
import styles from './Banner.module.less'
import { CSSTransition } from 'react-transition-group'

const Banner = () => {
	return (
		<CSSTransition in={true} timeout={200}>
			<div className={styles.banner}>
				<div className={styles.banner_title}>
					<h1 className="animate__animated animate__backInUp">
						falcon 9
					</h1>
					<h3 className="animate__animated animate__backInUp">
						First Orbital Class Rocket capable of reflight
					</h3>
				</div>
			</div>
		</CSSTransition>
	)
}

export default Banner
