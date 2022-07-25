import React from 'react'
import { Carousel } from 'antd'
import styles from './BotCarousel.module.less'
import { useGetCarouselQuery } from '../../../store/api/carouselApi'

const BotCarousel = () => {
	const { data, isSuccess } = useGetCarouselQuery()


	return (
		<div className={styles.carousel_main}>
			<Carousel effect="fade" autoplay dotPosition="left">
				{isSuccess &&
					data.map((item) => (
						<div key={item._id} className={styles.carousel_item}>
							<img src={process.env.REACT_APP_SERVER_URL + item.img} />
						</div>
					))}
			</Carousel>
		</div>
	)
}

export default BotCarousel
