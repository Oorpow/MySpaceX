/**
 * 数值动画
 * @param {*} target 目标时间
 * @param {*} delay 需要花费的延迟
 */
export const countDown = (dom, target, delay) => {
	let startNum = 0
	let timer = null

	if (timer) {
		clearInterval(timer)
	}

	timer = setInterval(() => {
		startNum += 1
        // console.log(dom)
		dom.innerHTML = startNum

		if (startNum >= target) {
			clearInterval(timer)
		}
	}, delay)
}
