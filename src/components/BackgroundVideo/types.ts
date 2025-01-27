export type VideoProps = {
	fileName: string
	autoPlay?: boolean
	controls?: boolean
	className?: string
	muted?: boolean
	loop?: boolean
	preload?: 'none' | 'metadata' | 'auto'
}
