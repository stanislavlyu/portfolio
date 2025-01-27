import React from 'react'
import { cn } from '@/lib/utils'
import { VideoProps } from './types.js'

const Video = ({
	src,
	poster = '',
	className,
	autoPlay,
	muted = true,
	controls,
	loop = true,
	preload = 'none',
}: VideoProps) => {
	return (
		<video
			className={cn('object-cover', className)}
			controls={controls}
			autoPlay={autoPlay}
			preload={preload}
			aria-label='Video player'
			muted={muted}
			loop={loop}
			suppressHydrationWarning
			playsInline={autoPlay}
			poster={poster}
		>
			<source src={src} type='video/mp4' />
			Your browser does not support the video tag.
		</video>
	)
}

export default Video
