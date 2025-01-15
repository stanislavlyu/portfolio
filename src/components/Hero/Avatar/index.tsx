'use client'

import { SKILL_LIST } from '@components/Hero/constants'
import { TransitionPanel } from '@components/ui/transition-panel'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const HeroAvatar = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % SKILL_LIST.length)
		}, 2000)

		return () => clearInterval(interval)
	}, [])

	return (
		<TransitionPanel
			className='order-1 md:order-2'
			activeIndex={activeIndex}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			variants={{
				enter: { opacity: 0, y: -20, filter: 'blur(12px)' },
				center: { opacity: 1, y: 0, filter: 'blur(0px)' },
				exit: { opacity: 0, y: 20, filter: 'blur(12px)' },
			}}
		>
			{SKILL_LIST.map(({ icon, title, alt }) => (
				<div
					key={title}
					className='relative h-[10rem] w-[10rem] justify-self-center md:h-[20rem] md:w-[20rem] md:justify-self-end'
				>
					<Image src={icon} alt={alt} fill />
				</div>
			))}
		</TransitionPanel>
	)
}

export default HeroAvatar
