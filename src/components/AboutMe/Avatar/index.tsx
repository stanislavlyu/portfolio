import Image from 'next/image'
import React from 'react'
import { AboutMeAvatarProps } from './types'

const AboutMeAvatar = ({ src, alt }: AboutMeAvatarProps) => {
	return (
		<div className='relative aspect-square h-full w-full rounded-lg shadow-md last:hidden lg:aspect-auto xl:last:block'>
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
