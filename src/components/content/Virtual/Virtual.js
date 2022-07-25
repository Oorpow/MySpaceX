import React, { useEffect, useRef, useState } from 'react'
import {
	useGetVirtualImgQuery,
} from '../../../store/api/virtualApi'
import { Carousel } from 'antd'
import styles from './Virtual.module.less'
import { useGetRealCarouselQuery } from '../../../store/api/realApi'

const Virtual = () => {
	// 虚拟图片
	const { data, isSuccess } = useGetVirtualImgQuery()
	// 虚拟对应的真实轮播
	let res = useGetRealCarouselQuery()

	const [carouselList, setCarouselList] = useState([])

	useEffect(() => {
		if (res.isSuccess) {
			setCarouselList(res.data)
		}
	}, [res])

	const virtualContent = useRef()
	const carouselRef = useRef()

	// 判断元素是否到达可视区域
	window.addEventListener('scroll', () => {
		let clientHeight =
			document.documentElement.clientHeight ||
			window.innerHeight ||
			document.body.clientHeight
		let scrollY =
			document.documentElement.scrollTop || document.body.scrollTop

		let distanceToTop = 0

		if (virtualContent.current) {
			distanceToTop =
				virtualContent.current.offsetTop +
				virtualContent.current.offsetTop / 1.5
		}

		let isVisible = clientHeight + scrollY > distanceToTop

		if (isVisible) {
			virtualContent.current.style.transition = 'all .5s'
			virtualContent.current.style.opacity = 0
			carouselRef.current.style.transition = 'all .5s'
			carouselRef.current.style.opacity = 1
		} else {
			virtualContent.current.style.transition = 'all .5s'
			virtualContent.current.style.opacity = 1
			carouselRef.current.style.transition = 'all .5s'
			carouselRef.current.style.opacity = 0
		}
	})

	return (
		<div className={styles.virtual}>
			{/* 虚拟图片 */}
			<div ref={virtualContent} className={styles.virtual_content}>
				<div className={styles.virtual_intro}>
					<h4>
						Falcon 9 is a reusable, two-stage rocket designed and
						manufactured by SpaceX for the reliable and safe
						transport of people and payloads into Earth orbit and
						beyond. Falcon 9 is the world's first orbital class
						reusable rocket. Reusability allows SpaceX to refly the
						most expensive parts of the rocket, which in turn drives
						down the cost of space access.
					</h4>
				</div>
				{/* 虚拟图片 */}
				{isSuccess && (
					<div className={styles.virtual_img}>
						<img
							src={
								process.env.REACT_APP_SERVER_URL + data[0].virtualImg
							}
						/>
					</div>
				)}
			</div>
			{/* 轮播 */}
			<div ref={carouselRef}>
				<Carousel>
					{carouselList.map((item) => (
						<div
							className={styles.carousel_item}
							key={item._id}
						>
							<div className={styles.carousel_item_intro}>
								<div
									className={styles.carousel_item_intro_title}
								>
									<h4>{item.smallTitle}</h4>
									<h2>{item.bigTitle}</h2>
								</div>
								{item.intro &&
									item.intro.map((detail) => (
										<div
											className={
												styles.carousel_item_intro_table
											}
											key={detail.name}
										>
											<div className={styles.table_td}>
												<span
													className={
														styles.table_td_name
													}
												>
													{detail.name}
												</span>
												<span
													className={
														styles.table_td_nums_first
													}
												>
													{detail.firstNum}
													<span
														className={
															styles.table_td_nums_last
														}
													>
														{detail.lastNum}
													</span>
												</span>
											</div>
										</div>
									))}
							</div>
							<div className={styles.carousel_item_img}>
								{item.img === '' &&
								item.videoSrc !== '' ? (
									<video
										autoPlay="autoplay"
										loop
										muted
										preload="true"
										width="100%"
									>
										<source
											type="video/webm"
											src={
												process.env.REACT_APP_SERVER_URL +
												item.videoSrc
											}
										/>
									</video>
								) : (
									<img
										src={
											process.env.REACT_APP_SERVER_URL +
											item.img
										}
									/>
								)}
							</div>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	)
}

export default Virtual
