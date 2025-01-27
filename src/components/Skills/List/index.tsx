import { Badge } from '@components/ui/badge'
import React from 'react'
import { SkillsListProps } from './types'

const SkillsList = ({ skillsList }: SkillsListProps) => {
	return (
		<ul className='flex flex-wrap gap-2'>
			{skillsList.map(({ name }) => (
				<li key={name}>
					<Badge
						variant='outline'
						className='relative rounded-lg text-base font-normal text-white'
					>
						{name}
					</Badge>
				</li>
			))}
		</ul>
	)
}

export default SkillsList
