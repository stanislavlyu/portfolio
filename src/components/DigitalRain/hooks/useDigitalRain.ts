import { useEffect, useRef } from 'react'
import { CHARACTERS, FONT_SIZE } from './constants'

const useDigitalRain = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	let lastWidth = window.innerWidth

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		const columns = canvas.width / FONT_SIZE

		const drops: number[] = []
		for (let i = 0; i < columns; i++) {
			drops[i] = 1
		}

		function draw() {
			if (!ctx || !canvas) return

			ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			ctx.fillStyle = 'rgba(22,55,114,0.55)'
			ctx.font = `${FONT_SIZE}px monospace`

			for (let i = 0; i < drops.length; i++) {
				const text = CHARACTERS.charAt(Math.floor(Math.random() * CHARACTERS.length))
				ctx.fillText(text, i * FONT_SIZE, drops[i] * FONT_SIZE)

				if (drops[i] * FONT_SIZE > canvas.height && Math.random() > 0.95) {
					drops[i] = 0
				}

				drops[i]++
			}
		}

		const intervalId = setInterval(draw, 50)
		let scheduledAnimationFrame = false

		function handleResize() {
			if (scheduledAnimationFrame) return
			scheduledAnimationFrame = true
			requestAnimationFrame(() => {
				if (canvas && window.innerWidth !== lastWidth) {
					lastWidth = window.innerWidth
					canvas.width = window.innerWidth
					canvas.height = window.innerHeight
				}
				scheduledAnimationFrame = false
			})
		}

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
			clearInterval(intervalId)
		}
	}, [])

	return canvasRef
}

export default useDigitalRain
