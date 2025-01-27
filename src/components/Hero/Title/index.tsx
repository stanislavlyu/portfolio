import { TextShimmer } from '@components/ui/text-shimmer'
import React from 'react'
import { HeroTitleProps } from './types'

const HeroTitle = ({ text, intro }: HeroTitleProps) => {
	return (
		<h1 className='max-w-[30rem] text-[2rem] font-semibold leading-[2.5rem] text-white md:text-[4rem] md:leading-[4.5rem]'>
			<span>{intro}</span>{' '}
			<TextShimmer
				duration={3}
				className='[--base-color:theme(colors.blue.700)] [--base-gradient-color:theme(colors.blue.200)] [--base-gradient-color:theme(colors.blue.400)]'
			>
				{text}
			</TextShimmer>
		</h1>
	)
}

export default HeroTitle
