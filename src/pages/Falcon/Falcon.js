import React from 'react'
import Banner from '../../components/content/Banner/Banner'
import BotCarousel from '../../components/content/BotCarousel/BotCarousel'
import Counter from '../../components/content/Counter/Counter'
import MpVideo from '../../components/content/MpVideo/MpVideo'
import Virtual from '../../components/content/Virtual/Virtual'
import styles from './Falcon.module.less'

const Falcon = () => {
	return <div className={styles.falcon}>
		<Banner />
		<Counter />
		<Virtual />
		<MpVideo />
		<BotCarousel />
	</div>
}

export default Falcon
