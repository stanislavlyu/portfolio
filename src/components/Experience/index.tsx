'use client'

import Section from '@components/Section'
import Title from '@components/Title'
import { Button } from '@components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { EXPERIENCE_LIST } from './constants'

const Experience = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<Section id='experience' className='py-10 md:py-[7.5rem]'>
			<div className='container mx-auto px-4'>
				<Title
					title='Work Experience'
					text='A showcase of my journey, skills, and contributions across diverse roles. From building high-performance websites to developing cutting-edge platforms, here are my career highlights.'
				/>
				<motion.div
					animate={{ height: isOpen ? 'auto' : 500 }}
					initial={{ height: 500 }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
					className='relative mt-8 flex flex-col gap-4 overflow-hidden'
				>
					{EXPERIENCE_LIST.map((job, index) => (
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
								<ul className='list-inside list-disc space-y-2'>
									{job.responsibilities.map((task, idx) => (
										<li key={idx} className='text-muted-foreground'>
											{task}
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					))}
					{!isOpen && (
						<div className='pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,white,transparent)] dark:bg-neutral-900' />
					)}
				</motion.div>
				<Button className='mt-4' onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? 'Show Less' : 'Show More'}
				</Button>
			</div>
		</Section>
	)
}

export default Experience
