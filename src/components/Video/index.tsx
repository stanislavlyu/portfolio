'use client'

import { CldVideoPlayer } from 'next-cloudinary'
import React from 'react'
import { cn } from '@/lib/utils'
import { VideoProps } from './types.js'

const Video = ({ className, ...restProps }: VideoProps) => {
	return (
		<div className={cn('h-full w-full', className)}>
			<CldVideoPlayer
				className='h-full w-full object-cover'
				transformation={{
					quality: 80,
					format: 'webp',
				}}
				{...restProps}
			/>
		</div>
	)
}

export default Video
