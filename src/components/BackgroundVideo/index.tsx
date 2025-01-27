import { list } from '@vercel/blob'
import React from 'react'
import { cn } from '@/lib/utils'
import { VideoProps } from './types.js'

const BackgroundVideo = async ({
	fileName,
	className,
	autoPlay,
	muted = true,
	controls,
	loop = true,
	preload = 'none',
}: VideoProps) => {
	const { blobs } = await list({
		prefix: fileName,
	})
	const videoSrc = blobs.find((blob) => blob.pathname.includes('.mp4'))?.url
	const posterSrc = blobs.find((blob) => blob.pathname.includes('.webp'))?.url

	return (
		<div className='absolute inset-0 -z-[1] h-full w-full'>
			<video
				className={cn('h-full w-full object-cover', className)}
				controls={controls}
				autoPlay={autoPlay}
				preload={preload}
				aria-label='Video player'
				poster={posterSrc}
				muted={muted}
				loop={loop}
				suppressHydrationWarning
				playsInline
			>
				<source src={videoSrc} type='video/mp4' />
				Your browser does not support the video tag.
			</video>
		</div>
	)
}

export default BackgroundVideo
