import Section from '@components/Section'
import Title from '@components/Title'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card'
import React from 'react'

const workExperience = [
	{
		company: 'Kapsys Pages',
		role: 'Frontend Developer',
		duration: '2023 - Present',
		responsibilities: [
			'Developed static site generation (SSG) websites to ensure optimal SEO and performance.',
			'Optimized web pages for faster load times and better user experience.',
			'Collaborated with clients to create scalable and visually appealing websites.',
		],
	},
	{
		company: 'Seobase',
		role: 'Frontend Developer',
		duration: '2021 - 2023',
		responsibilities: [
			'Initially developed the platform using Angular, providing a robust foundation for SEO tools and user management.',
			'Migrated the application to a server-side rendered (SSR) Next.js framework to improve performance, SEO capabilities, and scalability.',
			'Implemented Stripe integration for seamless subscription management, enabling secure and efficient payment processing.',
			'Developed advanced SEO tools, including SERP Checker, Rank Tracker, and Keyword Explorer, to empower users in analyzing and optimizing search performance.',
			'Integrated AI-powered features to generate summaries for SEO insights and actionable recommendations for users.',
			'Built an AI-powered content writer to assist users in creating optimized and engaging content efficiently.',
			'Designed and maintained a scalable architecture to accommodate a growing user base and ensure high application performance.',
			'Created efficient web scrapers to gather and analyze data from Google, delivering actionable insights to users.',
		],
	},
	{
		company: 'Interwetten',
		role: 'Software Engineer',
		duration: '2024',
		responsibilities: [
			'Developed and maintained a cutting-edge digital sports entertainment platform.',
			'Built a server-side rendered (SSR) Next.js blog application connected to a .NET backend, enabling seamless live bet updates.',
			'Integrated Kontent AI content management system (CMS) for dynamic content delivery, ensuring scalability and efficient workflows.',
			'Created a custom Kontent AI component to manage and display live bets directly on blog posts, enhancing the user experience.',
			'Optimized the application for performance and scalability, ensuring fast loading times and real-time updates.',
		],
	},
	{
		company: 'All American Home Care LLC',
		role: 'Angular Frontend Developer',
		duration: '2021 - 2022',
		responsibilities: [
			'Designed and developed a custom CRM system using Angular to streamline caregiver management, patient records, and scheduling.',
			'Integrated advanced features to support caregiver assignment, real-time updates, and compliance tracking.',
			'Improved operational efficiency by automating workflows, reducing manual tasks, and enhancing data accuracy.',
		],
	},
]

const Experience = () => {
	return (
		<Section id='experience'>
			<div className='container mx-auto px-4'>
				<Title
					title='Work Experience'
					text='A showcase of my journey, skills, and contributions across diverse roles. From building high-performance websites to developing cutting-edge platforms, here are my career highlights.'
				/>
				<div className='mt-8 flex flex-col gap-4'>
					{workExperience.map((job, index) => (
						<Card
							key={index}
							className='rounded-lg shadow-md transition duration-300 hover:shadow-lg'
						>
							<CardHeader>
								<CardTitle className='text-xl font-semibold'>{job.role}</CardTitle>
								<CardDescription>{job.company}</CardDescription>
								<p className='text-sm text-gray-500'>{job.duration}</p>
							</CardHeader>
							<CardContent>
								<ul className='mt-4 list-inside list-disc space-y-2'>
									{job.responsibilities.map((task, idx) => (
										<li key={idx} className='text-muted-foreground'>
											{task}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</Section>
	)
}

export default Experience
