import { Badge } from '@components/ui/badge'
import { BorderTrail } from '@components/ui/border-trail'
import React from 'react'
import { SkillsListProps } from './types'

const SkillsList = ({ skillsList }: SkillsListProps) => {
	return (
		<ul className='flex flex-wrap gap-2'>
			{skillsList.map(({ name }) => (
				<li key={name}>
					<Badge
						variant='outline'
						className='relative text-lg font-medium dark:text-white'
					>
						<BorderTrail
							style={{
								boxShadow:
									'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
							}}
							size={40}
						/>
						{name}
					</Badge>
				</li>
			))}
		</ul>
	)
}

export default SkillsList
