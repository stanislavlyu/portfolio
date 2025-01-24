'use client'

import useMediaQuery from '@hooks/useMediaQuery'
import { motion, useSpring, useTransform } from 'motion/react'
import React, { useRef, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'

type SpotlightProps = {
	className?: string
	size?: number
}

export function Spotlight({ className, size = 200 }: SpotlightProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const isMobile = useMediaQuery('(max-width: 768px)')

	const mouseX = useSpring(0, { bounce: 0 })
	const mouseY = useSpring(0, { bounce: 0 })

	const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`)
	const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`)

	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			const parent = containerRef.current?.parentElement
			if (!parent) return
			const { left, top } = parent.getBoundingClientRect()
			mouseX.set(event.clientX - left)
			mouseY.set(event.clientY - top)
		},
		[mouseX, mouseY]
	)

	useEffect(() => {
		if (!containerRef.current?.parentElement || isMobile) return

		const parent = containerRef.current.parentElement
		parent.addEventListener('mousemove', handleMouseMove)

		return () => {
			parent.removeEventListener('mousemove', handleMouseMove)
		}
	}, [isMobile])

	if (isMobile) return null

	return (
		<motion.div
			ref={containerRef}
			className={cn(
				'pointer-events-none absolute rounded-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops),transparent_80%)] blur-xl transition-opacity duration-200',
				'from-zinc-50 via-zinc-100 to-zinc-200',
				className
			)}
			style={{
				width: size,
				height: size,
				left: spotlightLeft,
				top: spotlightTop,
			}}
		/>
	)
}
