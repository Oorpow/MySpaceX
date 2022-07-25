import React, { lazy, Suspense } from 'react'
// import Banner from '../../components/content/Banner/Banner'
// import BotCarousel from '../../components/content/BotCarousel/BotCarousel'
// import Counter from '../../components/content/Counter/Counter'
// import MpVideo from '../../components/content/MpVideo/MpVideo'
// import Virtual from '../../components/content/Virtual/Virtual'
import styles from './Falcon.module.less'
import { CSSTransition } from 'react-transition-group'

const Banner = lazy(() => import('../../components/content/Banner/Banner'))
const BotCarousel = lazy(() =>
	import('../../components/content/BotCarousel/BotCarousel')
)
const Counter = lazy(() => import('../../components/content/Counter/Counter'))
const MpVideo = lazy(() => import('../../components/content/MpVideo/MpVideo'))
const Virtual = lazy(() => import('../../components/content/Virtual/Virtual'))

const Falcon = () => {
	return (
		<div className={styles.falcon}>
			{/* <Suspense fallback={<span>loading...</span>}> */}
			<Banner />
			{/* 计数 */}
			<Counter />
			{/* 3D图片 */}
			<Virtual />
			{/* 大视频 */}
			<MpVideo />
			{/* 底部轮播 */}
			<BotCarousel />
			{/* </Suspense> */}
		</div>
	)
}

export default Falcon
