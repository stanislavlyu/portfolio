export enum ComponentName {
	Hero = 'section.hero-section',
	Testimonial = 'section.testimonial-section',
	AboutUs = 'section.about-section',
	Certificate = 'section.certificate-section',
	Feature = 'section.feature-section',
	Blog = 'section.blog-section',
	BlogList = 'section.blog-page-section',
	Contact = 'section.contact-section',
	HeroInner = 'section.inner-hero-section',
	TextBlocks = 'section.text-blocks-section',
	Legal = 'section.legals-section',
}

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
