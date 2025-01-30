import Image from 'next/image'
import React from 'react'
import { BorderTrail } from '@/components/ui/border-trail'
import { AboutMeAvatarProps } from './types'

const AboutMeAvatar = ({ src, alt }: AboutMeAvatarProps) => {
	return (
		<div className='relative aspect-square h-full w-full rounded-lg shadow-md last:hidden lg:aspect-auto xl:last:block'>
			<BorderTrail
				className='bg-linear-to-l from-blue-200 via-blue-500 to-blue-200 dark:from-blue-400 dark:via-blue-500 dark:to-blue-700'
				size={120}
			/>
			<Image
				placeholder='blur'
				className='rounded-lg object-cover object-top'
				src={src}
				fill
				sizes='(max-width: 640px) 100vw, 20rem'
				alt={alt}
			/>
		</div>
	)
}

export default AboutMeAvatar
