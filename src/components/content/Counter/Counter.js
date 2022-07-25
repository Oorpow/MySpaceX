import React, { useRef, useState } from 'react'
import styles from './Counter.module.less'
import AnimatedNumbers from 'react-animated-numbers'

const Counter = () => {
	const countList = [
		{
			id: 1,
			nums: 164,
			title: 'total launches',
		},
		{
			id: 2,
			nums: 124,
			title: 'total landings',
		},
		{
			id: 3,
			nums: 103,
			title: 'total reflights',
		},
	]

	const countContainerRef = useRef(null)
	const [windowWidth, setWindowWidth] = useState(window.innerWidth)

	window.addEventListener('resize', () => {
		setWindowWidth(window.innerWidth)
	})

	const CountItem = () =>
		countList.map((item) => (
			<div className={styles.counter_item} key={item.id}>
				{/* 倒数插件 */}
				<AnimatedNumbers
					animateToNumber={item.nums}
					className={styles.counter_item_nums}
					fontStyle={windowWidth > 576 ? {fontSize: 80} : {fontSize: 40}}
				/>
				<span className={styles.counter_item_text}>{item.title}</span>
			</div>
		))

	return (
		<div className={styles.counter} ref={countContainerRef}>
			<div className={styles.counter_content}>{<CountItem />}</div>
		</div>
	)
}

export default Counter
