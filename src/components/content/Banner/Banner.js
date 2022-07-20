import React from 'react'
import styles from './Banner.module.less'

const Banner = () => {
	return <div className={styles.banner}>
		<div className={styles.banner_title}>
			<h1>falcon heavy</h1>
			<h3>The world's most powerful rocket</h3>
		</div>
	</div>
}

export default Banner
