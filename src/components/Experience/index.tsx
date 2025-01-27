'use client'

import Container from '@components/Container'
import Section from '@components/Section'
import Title from '@components/Title'
import { Button } from '@components/ui/button'
import { SectionType } from '@utils/types'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import Card from './Card'
import GradientOverlay from './GradientOverlay'
import Vector from './Vector'
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
		<Section id={SectionType.Experience} className='py-10'>
			<Vector />
			<Container className='relative z-20'>
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
						<Card key={index} {...job} />
					))}
					{!isOpen && <GradientOverlay />}
				</motion.div>
				<Button variant='outline' className='mt-4' onClick={handleToggle}>
					{isOpen ? 'Show Less' : 'Show More'}
				</Button>
			</Container>
		</Section>
	)
}

export default Experience
