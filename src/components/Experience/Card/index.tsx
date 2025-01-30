import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card'
import { GlowEffect } from '@components/ui/glow-effect'
import { COLORS } from '@utils/constants'
import React from 'react'
import { ExperienceCardProps } from './types'

const ExperienceCard = ({ role, company, duration, responsibilities }: ExperienceCardProps) => (
	<Card className='relative'>
		<GlowEffect colors={COLORS} mode='pulse' duration={3} blur='medium' />
		<div className='relative rounded-lg bg-black'>
			<CardHeader>
				<CardTitle className='text-xl font-semibold'>{role}</CardTitle>
				<CardDescription>{company}</CardDescription>
				<p className='text-sm text-gray-500'>{duration}</p>
			</CardHeader>
			<CardContent>
				<ul className='space-y-2'>
					{responsibilities.map((responsibility, idx) => (
						<li key={idx} className='text-muted-foreground'>
							{responsibility}
						</li>
					))}
				</ul>
			</CardContent>
		</div>
	</Card>
)

export default ExperienceCard
