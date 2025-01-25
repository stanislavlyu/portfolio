import { debounce } from 'lodash'
import { useEffect, useRef } from 'react'
import { DIGITAL_RAIN_CONFIG } from './constants'

const useDigitalRain = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		const columns = canvas.width / DIGITAL_RAIN_CONFIG.FONT_SIZE

		const drops: number[] = []
		for (let i = 0; i < columns; i++) {
			drops[i] = 1
		}

		function draw() {
			if (!ctx || !canvas) return

			ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			ctx.fillStyle = 'rgba(22,55,114,0.55)'
			ctx.font = `${DIGITAL_RAIN_CONFIG.FONT_SIZE}px monospace`

			for (let i = 0; i < drops.length; i++) {
				const text = DIGITAL_RAIN_CONFIG.CHARACTERS.charAt(
					Math.floor(Math.random() * DIGITAL_RAIN_CONFIG.CHARACTERS.length)
				)
				ctx.fillText(
					text,
					i * DIGITAL_RAIN_CONFIG.FONT_SIZE,
					drops[i] * DIGITAL_RAIN_CONFIG.FONT_SIZE
				)

				if (
					drops[i] * DIGITAL_RAIN_CONFIG.FONT_SIZE > canvas.height &&
					Math.random() > 0.95
				) {
					drops[i] = 0
				}

				drops[i]++
			}
		}

		const intervalId = setInterval(draw, 50)
		let scheduledAnimationFrame = false

		const handleResize = debounce(() => {
			if (scheduledAnimationFrame) return
			scheduledAnimationFrame = true
			requestAnimationFrame(() => {
				if (canvas) {
					canvas.width = window.innerWidth
				}
				scheduledAnimationFrame = false
			})
		}, 150)

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
			clearInterval(intervalId)
		}
	}, [])

	return canvasRef
}

export default useDigitalRain
