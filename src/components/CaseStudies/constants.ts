import interwettenBackground from '../../../public/assets/images/case-studies/interwetten-background.webp'
import interwettenMockup from '../../../public/assets/images/case-studies/interwetten-mockup.webp'
import seobaseBackground from '../../../public/assets/images/case-studies/seobase-background.webp'
import seobaseMockup from '../../../public/assets/images/case-studies/seobase-mockup.webp'

export enum SlideVariant {
	White = 'white',
	Black = 'black',
}

export const SLIDES = [
	{
		variant: SlideVariant.White,
		title: 'The Ultimate SEO Platform for Maximizing Website Performance',
		description:
			'Seobase is a comprehensive SEO tool designed to simplify SEO tasks,  manage a large user base, and scrape data efficiently from Google.',
		numbers: [
			{
				title: '40K+',
				description: 'Total Users',
			},
			{
				title: '18K+',
				description: 'Active Users',
			},
			{
				title: '4.9*',
				description: 'Capterra Rating',
			},
		],
		logo: {
			src: '/assets/images/case-studies/seobase.svg',
			alt: 'Seobase logo',
			height: 31,
			width: 124,
		},
		mockupImage: {
			src: seobaseMockup,
			alt: 'Seobase mockup',
		},
		button: {
			title: 'Explore',
			href: 'https://seobase.com/en',
		},
		backgroundImage: {
			src: seobaseBackground,
			alt: 'Seobase background',
		},
	},
	{
		variant: SlideVariant.Black,
		title: 'Cutting-Edge Digital Sports Entertainment Platform',
		description:
			'Interwetten offers high-quality online betting and gaming services, supported by advanced technological solutions and robust content management systems.',
		numbers: [],
		logo: {
			src: '/assets/images/case-studies/interwetten.svg',
			alt: 'Interwetten logo',
			height: 31,
			width: 80,
		},
		mockupImage: {
			src: interwettenMockup,
			alt: 'Interwetten mockup',
		},
		button: {
			title: 'Explore',
			href: 'https://www.interwetten.com/de/magazin',
		},
		backgroundImage: {
			src: interwettenBackground,
			alt: 'Interwetten background',
		},
	},
]
