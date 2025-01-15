import { SKILL_LIST } from '@components/Hero/constants'
import { TextLoop } from '@components/ui/text-loop'
import React from 'react'

const HeroDescription = () => {
	return (
		<div className='my-2 text-lg sm:text-xl lg:my-6 lg:text-2xl'>
			Experienced front-end developer
			<br />
			with 5+ years of expertise in{' '}
			<TextLoop className='font-semibold text-red-700'>
				{SKILL_LIST.map(({ title }) => title)}
			</TextLoop>
		</div>
	)
}

export default HeroDescription
