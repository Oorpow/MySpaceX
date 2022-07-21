import React from 'react'
import { Carousel } from 'antd'
import styles from './BotCarousel.module.less'
import { useGetCarouselQuery } from '../../../store/api/carouselApi'

const BotCarousel = () => {
	const { data, isSuccess } = useGetCarouselQuery()

	return (
		<div>
			<Carousel effect="fade" autoplay dotPosition="left">
				{isSuccess &&
					data.map((item) => (
						<div key={item.id}>
							<img src={'http://localhost:1337' + item.attributes.url} />
						</div>
					))}
			</Carousel>
		</div>
	)
}

export default BotCarousel
