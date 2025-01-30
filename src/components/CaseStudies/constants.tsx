import { InterwettenLogo, SeobaseLogo } from '@lib/svgr'
import interwettenBackground from '../../../public/assets/images/case-studies/interwetten-background.webp'
import seobaseBackground from '../../../public/assets/images/case-studies/seobase-background.webp'

export enum SlideVariant {
	White = 'white',
	Black = 'black',
}

export const SLIDES = [
	{
		variant: SlideVariant.White,
		title: 'The Ultimate SEO Platform for Maximizing Website Performance',
		description:
			'Seobase is a comprehensive SEO tool designed to simplify SEO tasks, manage a large user base, and scrape data efficiently from Google.',
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
		Logo: <SeobaseLogo width={124} height={31} />,
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
		Logo: <InterwettenLogo width={80} height={50} />,
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
