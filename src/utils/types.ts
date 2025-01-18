export enum SectionType {
	Hero = 'hero',
	CaseStudies = 'caseStudies',
	Skills = 'skills',
	Experience = 'experience',
	Testimonials = 'testimonials',
	Contact = 'contact',
}

export const NAVIGATION_LIST = [
	{ id: SectionType.CaseStudies, title: 'Case Studies' },
	{ id: SectionType.Skills, title: 'Skills' },
	{ id: SectionType.Experience, title: 'Experience' },
	{ id: SectionType.Testimonials, title: 'Testimonials' },
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
