import { InfiniteSlider } from '@components/ui/infinite-slider'
import Image from 'next/image'
import React from 'react'
import { TECH_ICONS } from './constants'

const HeroMarquee = () => {
	return (
		<InfiniteSlider className='absolute bottom-6 z-10' gap={24} duration={50} reverse>
			{TECH_ICONS.map(({ title, icon, alt }, index) => (
				<div
					key={index}
					className='flex items-center gap-4 rounded-lg border bg-black/50 p-5 font-normal'
				>
					<Image className='h-6 w-6' width={24} height={24} src={icon} alt={alt} />
					{title}
				</div>
			))}
		</InfiniteSlider>
	)
}

export default HeroMarquee
