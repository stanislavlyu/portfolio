import { TextShimmer } from '@components/ui/text-shimmer'
import React from 'react'

const HeroTitle = () => {
	return (
		<h1 className='max-w-[30rem] text-[2rem] font-semibold leading-[2.5rem] md:text-[4rem] md:leading-[4.5rem]'>
			<span>Hi there, I am</span>{' '}
			<TextShimmer
				duration={3}
				className='[--base-color:theme(colors.red.700)] [--base-gradient-color:theme(colors.red.200)] dark:[--base-color:theme(colors.red.700)] dark:[--base-gradient-color:theme(colors.red.400)]'
			>
				Stanislav Lyu
			</TextShimmer>
		</h1>
	)
}

export default HeroTitle
