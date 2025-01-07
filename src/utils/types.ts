export const NAVIGATION_LIST = [
	{ id: 'case-studies', title: 'Case Studies', href: '#case-studies' },
	{ id: 'skills', title: 'Skills', href: '#skills' },
	{ id: 'experience', title: 'Experience', href: '#experience' },
	{ id: 'testimonials', title: 'Testimonials', href: '#testimonials' },
	{ id: 'location', title: 'Location', href: '#location' },
]

export type Picture = {
	documentId: string
	name: string
	alternativeText: string
	caption: string
	width: number
	height: number
	url: string
	previewUrl: string | null
	createdAt: number
	updatedAt: number
	publishedAt: number
	formats: {
		thumbnail: {
			url: string
		}
	} | null
}

export type Button = {
	name: string
	href: string
	variant: 'primary' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link'
	id: string
	size: 'default' | 'sm' | 'md' | 'lg' | 'icon' | null | undefined
}

export type Title = {
	title: string
	align: 'left' | 'center'
	badge?: string
	description?: string
}

export type SeoData = {
	title: string
	description: string
	twitter: {
		title: string
		description: string
		images: string[]
	}
	openGraph: {
		title: string
		description: string
		images: string[]
	}
}
