import { debounce } from 'lodash'
import { useEffect, useRef } from 'react'
import { DIGITAL_RAIN_CONFIG } from './constants'
import { getGradientColor, interpolateColor } from './helpers'
import { Particle } from './types'

const useDigitalRain = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const ctx = canvas.getContext('2d')
		if (!ctx) return

		canvas.width = window.innerWidth
		canvas.height = window.innerHeight

		const isMobile = window.innerWidth <= 768
		const numParticles = isMobile
			? DIGITAL_RAIN_CONFIG.numParticles / 3
			: DIGITAL_RAIN_CONFIG.numParticles
		const connectionDistance = DIGITAL_RAIN_CONFIG.connectionDistance
		const maxSpeed = DIGITAL_RAIN_CONFIG.maxSpeed

		// Create initial particles
		const particles: Particle[] = []
		for (let i = 0; i < numParticles; i++) {
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * maxSpeed,
				vy: (Math.random() - 0.5) * maxSpeed,
				size: Math.random() * 3 + 1,
				color: getGradientColor(
					Math.random() * canvas.height,
					canvas.height,
					DIGITAL_RAIN_CONFIG.colors
				),
			})
		}

		const draw = () => {
			if (!ctx || !canvas) return

			// Create fade effect
			ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
			ctx.fillRect(0, 0, canvas.width, canvas.height)

			// Update and draw particles
			particles.forEach((particle, i) => {
				// Update position
				particle.x += particle.vx
				particle.y += particle.vy

				// Bounce off edges
				if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
				if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

				// Draw connections
				for (let j = i + 1; j < particles.length; j++) {
					const other = particles[j]
					const dx = other.x - particle.x
					const dy = other.y - particle.y
					const distance = Math.sqrt(dx * dx + dy * dy)

					if (distance < connectionDistance) {
						// Interpolate color based on distance
						const opacity = (1 - distance / connectionDistance) * 0.5
						const color = interpolateColor(
							particle.color,
							other.color,
							distance / connectionDistance
						)

						ctx.beginPath()
						ctx.strokeStyle = `rgba(${color.slice(4, -1)}, ${opacity})`
						ctx.lineWidth = 1
						ctx.moveTo(particle.x, particle.y)
						ctx.lineTo(other.x, other.y)
						ctx.stroke()
					}
				}
			})
		}

		const intervalId = setInterval(draw, 1000 / 60) // 60 FPS
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
		}, DIGITAL_RAIN_CONFIG.resizeDebounceDelay)

		window.addEventListener('resize', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
			clearInterval(intervalId)
		}
	}, [])

	return canvasRef
}

export default useDigitalRain
