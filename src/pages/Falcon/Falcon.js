import React from 'react'
import Banner from '../../components/content/Banner/Banner'
import Counter from '../../components/content/Counter/Counter'
import Virtual from '../../components/content/Virtual/Virtual'
import styles from './Falcon.module.less'

const Falcon = () => {
	return <div className={styles.falcon}>
		<Banner />
		<Counter />
		<Virtual />
	</div>
}

export default Falcon
