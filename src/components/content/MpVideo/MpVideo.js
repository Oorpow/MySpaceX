import React from 'react'
import styles from './MpVideo.module.less'

const MpVideo = () => {
	return (
		<div className={styles.mp}>
			<div className={styles.mp_intro}>
				<h3>video</h3>
				<h2>falcon 9 in flight</h2>
			</div>
			<svg
				width="64.025"
				height="81.486"
				viewBox="0 0 64.025 81.486"
				className={styles.mp_play}
			>
				<g>
					<path
						d="M8,5V86.486L72.025,45.743Z"
						transform="translate(-8 -5)"
						fill="#fff"
					></path>
				</g>
			</svg>
		</div>
	)
}

export default MpVideo
