export type VideoProps = {
	src: string
	poster?: string
	autoPlay?: boolean
	controls?: boolean
	className?: string
	muted?: boolean
	loop?: boolean
	preload?: 'none' | 'metadata' | 'auto'
}
