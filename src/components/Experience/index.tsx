'use client'

import Section from '@components/Section'
import Title from '@components/Title'
import { Button } from '@components/ui/button'
import { SectionType } from '@utils/types'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import Card from './Card'
import GradientOverlay from './GradientOverlay'
import Vector from './Vector'
import { EXPERIENCE_LIST } from './constants'

const Experience = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Section id={SectionType.Experience} className='py-10'>
			<Vector />
			<div className='container relative z-20'>
				<Title
					title='Work Experience'
					text='A showcase of my journey, skills, and contributions across diverse roles. From building high-performance websites to developing cutting-edge platforms, here are my career highlights.'
				/>
				<motion.div
					animate={{ height: isOpen ? 'auto' : 500 }}
					initial={{ height: 500 }}
					transition={{ duration: 0.3, ease: 'easeOut' }}
					className='relative mt-8 flex flex-col gap-4 overflow-hidden lg:gap-8'
				>
					{EXPERIENCE_LIST.map((job, index) => (
						<Card key={index} {...job} />
					))}
					{!isOpen && <GradientOverlay />}
				</motion.div>
				{!isOpen && (
					<Button variant='outline' className='mt-4' onClick={() => setIsOpen(true)}>
						Show More
					</Button>
				)}
			</div>
		</Section>
	)
}

export default Experience
