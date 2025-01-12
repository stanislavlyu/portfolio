'use client'

import React, { useRef } from 'react'
import { useThreeBackground } from './hooks/useThreeBackground'

const ThreeBackground: React.FC = () => {
	const containerRef = useRef<HTMLDivElement | null>(null)
	useThreeBackground(containerRef)
	return <div ref={containerRef} className='fixed left-0 top-0 -z-[1] h-full w-full' />
}

export default ThreeBackground
