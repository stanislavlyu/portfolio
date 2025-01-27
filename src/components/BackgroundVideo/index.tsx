'use client'

import { CldVideoPlayer } from 'next-cloudinary'
import 'next-cloudinary/dist/cld-video-player.css'
import React from 'react'
import { cn } from '@/lib/utils'
import { BackgroundVideoProps } from './types.js'

const BackgroundVideo = ({ className, loop = true, src, ...restProps }: BackgroundVideoProps) => {
	return (
		<div className={cn('absolute left-0 top-0 -z-[1] h-full w-full', className)}>
			<CldVideoPlayer
				loop={loop}
				autoplay={true}
				muted={true}
				controls={false}
				transformation={{
					quality: 90,
					format: 'webp',
				}}
				src={src}
				{...restProps}
			/>
		</div>
	)
}

export default BackgroundVideo
