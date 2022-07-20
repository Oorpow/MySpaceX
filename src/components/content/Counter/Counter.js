import React, { useEffect, useRef, useState } from 'react'
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

	const CountItem = () =>
		countList.map((item) => (
			<div className={styles.counter_item} key={item.id}>
				<AnimatedNumbers
					animateToNumber={item.nums}
					className={styles.counter_item_nums}
					fontStyle={{fontSize: 80}}
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
