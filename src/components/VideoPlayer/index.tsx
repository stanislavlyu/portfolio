'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import { ReactPlayerProps } from 'react-player/lazy'

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
	ssr: false,
	loading: () => <div className='h-full w-full animate-pulse bg-black' />,
})

const VideoPlayer = (props: ReactPlayerProps) => {
	return <ReactPlayer {...props} />
}

export default VideoPlayer
