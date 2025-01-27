import React from 'react'
import { cn } from '@/lib/utils'
import { VideoProps } from './types.js'

const BackgroundVideo = ({
	className,
	autoPlay,
	muted = true,
	controls,
	loop = true,
	preload = 'none',
	src,
	poster,
}: VideoProps) => {
	return (
		<div className='absolute inset-0 -z-[1] h-full w-full'>
			<video
				className={cn('h-full w-full object-cover', className)}
				controls={controls}
				autoPlay={autoPlay}
				preload={preload}
				aria-label='Video player'
				poster={poster}
				muted={muted}
				loop={loop}
				suppressHydrationWarning
				playsInline={autoPlay}
			>
				<source src={src} type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		</div>
	)
}

export default BackgroundVideo
