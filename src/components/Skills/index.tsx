'use client'

import Section from '@components/Section'
import SkillsList from '@components/Skills/List'
import Title from '@components/Title'
import { TitleVariant } from '@components/Title/types'
import { SectionType } from '@utils/types'
import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic'
import React, { useEffect, useRef, useState } from 'react'
import videoSrc from '@/../../videos/devices.mp4'
import { ITEMS } from './constants'

const Video = dynamic(() => import('next-video'))

const Skills = () => {
	const [isVideoVisible, setIsVideoVisible] = useState(false)
	const videoContainerRef = useRef<HTMLDivElement | null>(null)
	const inView = useInView(videoContainerRef, { once: true })

	useEffect(() => {
		if (inView) {
			setIsVideoVisible(true)
		}
	}, [inView])

	return (
		<Section id={SectionType.Skills}>
			<div className='container'>
				<Title
					variant={TitleVariant.Vertical}
					title='Skills'
					text='A comprehensive showcase of technical expertise and interpersonal abilities, highlighting the tools, technologies, and soft skills that contribute to professional success and effective collaboration.'
				/>
				<div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
					<motion.div ref={videoContainerRef} className='-scale-x-100 lg:order-last'>
						{isVideoVisible && (
							<Video
								className='w-full md:scale-[1.25] lg:h-[28.875rem]'
								autoPlay
								src={videoSrc}
								loop
								muted
								controls={false}
								playsInline
							/>
						)}
					</motion.div>
					<div className='flex flex-wrap gap-8'>
						{ITEMS.map(({ title, skills }) => (
							<div key={title} className='py-2'>
								<h3 className='mb-3 max-w-[20rem] font-medium text-zinc-100'>
									{title}
								</h3>
								{<SkillsList skillsList={skills} />}
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	)
}

export default Skills
