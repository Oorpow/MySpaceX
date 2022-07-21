import React, { useEffect, useRef, useState } from 'react'
import {
	useGetVirtualImgQuery,
	useGetVirtualCarouselQuery,
} from '../../../store/api/virtualApi'
import { Carousel } from 'antd'
import styles from './Virtual.module.less'

const Virtual = () => {
	const { data, isSuccess } = useGetVirtualImgQuery()

	let res = useGetVirtualCarouselQuery()

	const [carouselList, setCarouselList] = useState([])

	const falconList = [
		{
			smallTitle: 'falcon 9',
			bigTitle: 'overview',
			intro: [
				{
					name: 'height',
					firstNum: '70 m',
					lastNum: ' / 229.6 ft',
				},
				{
					name: 'diameter',
					firstNum: '3.7 m',
					lastNum: ' / 12 ft',
				},
				{
					name: 'mass',
					firstNum: '549,054 kg',
					lastNum: ' / 1,207,920 lb',
				},
				{
					name: 'PAYLOAD TO LEO',
					firstNum: '22,800 kg',
					lastNum: ' / 50,265 lb',
				},
				{
					name: 'PAYLOAD TO GTO',
					firstNum: '22,800 kg',
					lastNum: ' / 50,265 lb',
				},
				{
					name: 'PAYLOAD TO MARS',
					firstNum: '22,800 kg',
					lastNum: ' / 50,265 lb',
				},
			],
			url: 'http://localhost:1337/uploads/Website_F9_Fairings_Render_Desktop_7976da6f66.webp',
		},
		{
			smallTitle: 'falcon 9',
			bigTitle: 'overview',
		},
		{
			smallTitle: 'falcon 9',
			bigTitle: 'overview',
		},
	]

	useEffect(() => {
		const formatCarouselList = () => {
			if (res.isSuccess) {
				let copyCarousel = JSON.parse(JSON.stringify(res.data))

				copyCarousel.forEach((item) => {
					falconList.forEach((data) => {
						item['smallTitle'] = data['smallTitle']
						item['bigTitle'] = data['bigTitle']
						if (data['intro'] != null) {
							item['intro'] = []
							item['intro'].push(...data['intro'])
						}
					})
				})

				setCarouselList(copyCarousel)
			}
		}
		formatCarouselList()
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
		let distanceToTop =
			virtualContent.current.offsetTop +
			virtualContent.current.offsetTop / 1.5
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
								'http://localhost:1337' + data[0].attributes.url
							}
						/>
					</div>
				)}
			</div>
			<div ref={carouselRef}>
				{/* 轮播 */}
				<Carousel>
					{carouselList.map((item) => (
						<div
							className={styles.carousel_item}
							key={item.bigTitle}
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
								{item.attributes.url == null && item.attributes.videoSrc != '' ? (
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
												'http://localhost:1337' +
												item.attributes.videoSrc
											}
										/>
									</video>
								) : (
									<img
										src={
											'http://localhost:1337' +
											item.attributes.url
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
