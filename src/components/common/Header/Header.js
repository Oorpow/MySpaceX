import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Col, Row, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import styles from './Header.module.less'
// import { Transition } from 'react-transition-group'

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

	// 抽屉
	const [visible, setVisible] = useState(false)

	// 开启抽屉
	const showDrawer = () => {
		setVisible(true)
	}

	// 关闭抽屉
	const onClose = () => {
		setVisible(false)
	}

	return (
		<>
			<Row className={styles.header}>
				{/* logo */}
				<Col xs={22} lg={4}>
					<Link to="/" className={styles.logo}>
						{/* SPACEB */}
					</Link>
				</Col>
				{/* 路由导航 */}
				<Col xs={0} lg={16}>
					<div className={styles.navigation}>
						<ul>
							{routeList.map((route) => (
								<li key={route.id}>
									<NavLink to={route.url}>
										{route.title}
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</Col>
				<Col xs={0} lg={4}>
					<div className={styles.toggle}>
						<Link to="/">SHOP</Link>
					</div>
				</Col>
				{/* 汉堡按钮 */}
				<Col xs={2} lg={0}>
					<MenuOutlined
						style={{
							color: '#fff',
							fontSize: '20px',
							cursor: 'pointer',
						}}
						onClick={showDrawer}
					/>
				</Col>
			</Row>
			{/* 抽屉 */}
			<Drawer
				placement="right"
				onClose={onClose}
				visible={visible}
				headerStyle={{ borderBottom: 0, backgroundColor: '#000' }}
				bodyStyle={{ backgroundColor: '#000' }}
			>
				{routeList.map((route) => (
					<div className={styles.route_item} key={route.id}>
						<NavLink to={route.url}>{route.title}</NavLink>
					</div>
				))}
			</Drawer>
		</>
	)
}

export default Header
