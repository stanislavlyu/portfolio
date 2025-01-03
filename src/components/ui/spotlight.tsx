'use client'

import { motion, useSpring, useTransform, SpringOptions } from 'motion/react'
import React, { useRef, useState, useCallback, useEffect } from 'react'
import { cn } from '@/lib/utils'

type SpotlightProps = {
	className?: string
	size?: number
	springOptions?: SpringOptions
}

export function Spotlight({
	className,
	size = 200,
	springOptions = { bounce: 0 },
}: SpotlightProps) {
	const containerRef = useRef<HTMLDivElement>(null)
	const [parentElement, setParentElement] = useState<HTMLElement | null>(null)

	const mouseX = useSpring(0, springOptions)
	const mouseY = useSpring(0, springOptions)

	const spotlightLeft = useTransform(mouseX, (x) => `${x - size / 2}px`)
	const spotlightTop = useTransform(mouseY, (y) => `${y - size / 2}px`)

	useEffect(() => {
		if (containerRef.current) {
			const parent = containerRef.current.parentElement
			if (parent) {
				setParentElement(parent)
			}
		}
	}, [])

	const handleMouseMove = useCallback(
		(event: MouseEvent) => {
			if (!parentElement) return
			const { left, top } = parentElement.getBoundingClientRect()
			mouseX.set(event.clientX - left)
			mouseY.set(event.clientY - top)
		},
		[mouseX, mouseY, parentElement]
	)

	useEffect(() => {
		if (!parentElement) return

		parentElement.addEventListener('mousemove', handleMouseMove)

		return () => {
			parentElement.removeEventListener('mousemove', handleMouseMove)
		}
	}, [parentElement, handleMouseMove])
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
