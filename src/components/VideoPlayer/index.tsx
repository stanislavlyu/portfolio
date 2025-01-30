import { cn } from '@lib/utils'
import React from 'react'
import { VideoPlayerProps } from './types'

const VideoPlayer = ({ src, className, ...restProps }: VideoPlayerProps) => {
	return (
		<video
			className={cn('h-full w-full object-cover', className)}
			src={src}
			controls={false}
			{...restProps}
		/>
	)
}

export default VideoPlayer
