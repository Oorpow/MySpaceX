import React from 'react'
import { Row, Col } from 'antd'
import styles from './Footer.module.less'

const Footer = () => {
	const copyrightList = [
		{
			title: 'twitter',
		},
		{
			title: 'youtube',
		},
		{
			title: 'ins',
		},
		{
			title: 'flickr',
		},
		{
			title: 'linkedin',
		},
		{
			title: 'privacy policy',
		},
		{
			title: 'suppliers',
		},
	]

	return (
		<div className={styles.footer_main}>
			<Row justify="center">
				<Col xs={24} sm={18} md={16}>
					{/* 用户指南及竖线区域 */}
					<div className={styles.footer_main_top}>
						<div className={styles.bar}></div>
						<p className={styles.top_info}>
							For information about our launch services, contact
							<span> sales@haonange.com</span>
						</p>
						<div className={styles.btn_group}>
							<div className={styles.btn_group_item}>
								<div className={styles.mask}></div>
								<div className={styles.real}>
									download user's guide
								</div>
							</div>

							<div className={styles.btn_group_item}>
								<div className={styles.mask}></div>
								<div className={styles.real}>
									Capabilities and Services
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>

			{/* 底部版权 */}
			<div className={styles.footer_main_bottom}>
				<ul className={styles.list}>
					<span className={styles.copyright}>nanshenbge © 2022</span>
					{copyrightList.map((item) => (
						<li key={item.title}>
							<span>{item.title}</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Footer
