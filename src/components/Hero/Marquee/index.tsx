import { InfiniteSlider } from '@components/ui/infinite-slider'
import React from 'react'
import Item from './Item'
import { TECH_ICONS } from './constants'

const HeroMarquee = () => {
	return (
		<InfiniteSlider className='absolute bottom-6 z-10 w-full' gap={24} duration={50} reverse>
			{TECH_ICONS.map(({ title, icon, alt }, index) => (
				<Item key={index} title={title} icon={icon} alt={alt} />
			))}
		</InfiniteSlider>
	)
}

export default HeroMarquee
