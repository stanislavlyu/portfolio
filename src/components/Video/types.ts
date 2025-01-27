export type VideoProps = {
	src: string
	autoPlay?: boolean
	controls?: boolean
	className?: string
	muted?: boolean
	loop?: boolean
	poster?: string
	preload?: 'none' | 'metadata' | 'auto'
}
