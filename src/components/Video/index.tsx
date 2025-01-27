import { list } from '@vercel/blob'
import React from 'react'
import { cn } from '@/lib/utils'
import { VideoProps } from './types.js'

const Video = async ({
	fileName,
	className,
	autoPlay,
	muted = true,
	controls,
	loop = true,
}: VideoProps) => {
	const { blobs } = await list({
		prefix: fileName,
	})
	const src = blobs[1].url
	console.log(src)
	return (
		<video
			className={cn('object-cover', className)}
			controls={controls}
			autoPlay={autoPlay}
			preload='metadata'
			aria-label='Video player'
			muted={muted}
			loop={loop}
			suppressHydrationWarning
			playsInline
		>
			<source src={src} type='video/mp4' />
			Your browser does not support the video tag.
		</video>
	)
}

export default Video
