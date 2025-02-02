'use client'

import { cn } from '@lib/utils'
import { NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT } from '@utils/env'
import { IKVideo } from 'imagekitio-next'
import PropsWithVideoElement from 'imagekitio-next/dist/types/components/IKVideo/props'
import React from 'react'

const VideoPlayer = ({ className, ...restProps }: PropsWithVideoElement) => {
	return (
		<IKVideo
			urlEndpoint={NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT}
			className={cn('h-full w-full object-cover', className)}
			controls={false}
			{...restProps}
		/>
	)
}

export default VideoPlayer
