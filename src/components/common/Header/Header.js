import React from 'react'
import { Col, Row } from 'antd'
import { Link, NavLink } from 'react-router-dom'
import styles from './Header.module.less'

const Header = () => {
	const routeList = [
		{
			id: 1,
			title: 'FALCON 9',
			url: '/falcon',
		},
		{
			id: 2,
			title: 'FALCON HEAVY',
			url: '/falcon-heavy',
		},
		{
			id: 3,
			title: 'DRAGON',
			url: '/dragon',
		},
		{
			id: 4,
			title: 'STARSHIP',
			url: 'starship',
		},
		{
			id: 5,
			title: 'HUMAN SPACEFLIGHT',
			url: 'spacelight',
		},
		{
			id: 6,
			title: 'RIDESHARE',
			url: 'rideshare',
		},
		{
			id: 7,
			title: 'STARLINK',
			url: 'starlink',
		},
	]

	return (
		<Row className={styles.header}>
			<Col span={4}>
				<Link to="/" className={styles.logo}>
					LOGO
				</Link>
			</Col>
			<Col span={16}>
				<div className={styles.navigation}>
					<ul>
						{routeList.map((route) => (
							<li key={route.id}>
								<NavLink to={route.url}>{route.title}</NavLink>
							</li>
						))}
					</ul>
				</div>
			</Col>
			<Col span={4}>
				<div className={styles.toggle}>
					<Link to="/">SHOP</Link>
				</div>
			</Col>
		</Row>
	)
}

export default Header
