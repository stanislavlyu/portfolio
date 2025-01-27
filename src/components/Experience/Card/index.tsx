import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card'
import React from 'react'
import { ExperienceCardProps } from './types'

const ExperienceCard = ({ role, company, duration, responsibilities }: ExperienceCardProps) => (
	<Card className='rounded-lg bg-black/50 shadow-md transition duration-300 hover:shadow-lg'>
		<CardHeader>
			<CardTitle className='text-xl font-semibold'>{role}</CardTitle>
			<CardDescription>{company}</CardDescription>
			<p className='text-sm text-gray-500'>{duration}</p>
		</CardHeader>
		<CardContent>
			<ul className='list-inside list-disc space-y-2'>
				{responsibilities.map((responsibility, idx) => (
					<li key={idx} className='text-muted-foreground'>
						{responsibility}
					</li>
				))}
			</ul>
		</CardContent>
	</Card>
)

export default ExperienceCard
