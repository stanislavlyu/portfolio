'use client'

import Container from '@components/Container'
import Section from '@components/Section'
import Title from '@components/Title'
import { Button } from '@components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@components/ui/card'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { EXPERIENCE_LIST } from './constants'

const Experience = () => {
	const [isOpen, setIsOpen] = useState(false)
	const router = useRouter()

	const handleToggle = () => {
		if (isOpen) {
			router.push('#experience')
		}
		setIsOpen(!isOpen)
	}
	return (
		<Section id='experience' className='py-10'>
			<Container>
				<Title
					title='Work Experience'
					text='A showcase of my journey, skills, and contributions across diverse roles. From building high-performance websites to developing cutting-edge platforms, here are my career highlights.'
				/>
				<motion.div
					animate={{ height: isOpen ? 'auto' : 450 }}
					initial={{ height: 450 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}
					className='relative mt-8 flex flex-col gap-4 overflow-hidden'
				>
					{EXPERIENCE_LIST.map((job, index) => (
						<Card
							key={index}
							className='rounded-lg bg-black/50 shadow-md transition duration-300 hover:shadow-lg'
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
				<Button variant='outline' className='mt-4' onClick={handleToggle}>
					{isOpen ? 'Show Less' : 'Show More'}
				</Button>
			</Container>
		</Section>
	)
}

export default Experience
