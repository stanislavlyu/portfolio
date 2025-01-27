import { TextLoop } from '@components/ui/text-loop'
import React from 'react'
import { SKILL_LIST } from '../constants'
import { HeroDescriptionProps } from './types'

const HeroDescription = ({ title, subtitle }: HeroDescriptionProps) => {
	return (
		<div className='my-2 text-lg text-white sm:text-xl lg:my-6 lg:text-2xl'>
			{title}
			<br />
			{subtitle}{' '}
			<TextLoop className='font-semibold text-blue-700'>
				{SKILL_LIST.map(({ title }) => title)}
			</TextLoop>
		</div>
	)
}

export default HeroDescription
