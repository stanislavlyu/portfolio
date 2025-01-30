import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@components/ui/card'
import Image from 'next/image'
import React from 'react'
import { GlowEffect } from '@/components/ui/glow-effect'
import { COLORS } from '@/utils/constants'
import { TestimonialCardProps } from './types'

const TestimonialCard = ({ Logo, text, avatar, name, position }: TestimonialCardProps) => {
	return (
		<Card className='relative'>
			<GlowEffect colors={COLORS} mode='pulse' duration={3} blur='medium' />
			<div className='relative rounded-lg bg-black'>
				<CardHeader>
					<CardTitle className='text-white'>{Logo}</CardTitle>
					<CardDescription className='!mt-8'>{text}</CardDescription>
				</CardHeader>
				<CardFooter className='mt-6 flex gap-4'>
					<Image
						width={64}
						height={64}
						src={avatar}
						alt={name}
						className='h-16 w-16 rounded-full'
					/>
					<div className='flex flex-col gap-1'>
						<span className='text-xl font-semibold text-gray-200'>{name}</span>
						<span className='text-gray-500'>{position}</span>
					</div>
				</CardFooter>
			</div>
		</Card>
	)
}

export default TestimonialCard
