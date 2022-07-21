import React from 'react'
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
			{/* 用户手册及竖线区域 */}
			<div className={styles.footer_main_top}>
				<div className={styles.bar}></div>
				<p className={styles.top_info}>
					For information about our launch services, contact
					<span> sales@haonange.com</span>
				</p>
				<div className={styles.btn_group}>
					<div className={styles.btn_group_item}>
						<div className={styles.mask}></div>
						<div className={styles.real}>download user's guide</div>
					</div>
					<div className={styles.btn_group_item}>
						<div className={styles.mask}></div>
						<div className={styles.real}>
							Capabilities and Services
						</div>
					</div>
				</div>
			</div>

			{/* 底部版权 */}
			<div className={styles.footer_main_bottom}>
				<ul className={styles.list}>
					<li>
						<span className={styles.copyright}>nanshenbge © 2022</span>
					</li>
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
