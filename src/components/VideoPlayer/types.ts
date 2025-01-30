import { VideoHTMLAttributes } from 'react'

export type VideoPlayerProps = {
	src: string
	className?: string
} & VideoHTMLAttributes<HTMLVideoElement>
