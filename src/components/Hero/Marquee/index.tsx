import React from 'react'
import Marquee from 'react-fast-marquee'
import Item from './Item'
import { TECH_ICONS } from './constants'

const HeroMarquee = () => {
	return (
		<div className='absolute bottom-6 z-10 w-full'>
			<Marquee gradient={false} speed={50} direction='right' pauseOnHover>
				{TECH_ICONS.map(({ title, icon, alt }, index) => (
					<Item key={index} title={title} icon={icon} alt={alt} />
				))}
			</Marquee>
		</div>
	)
}

export default HeroMarquee
