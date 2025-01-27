import Section from '@components/Section'
import SkillsList from '@components/Skills/List'
import Title from '@components/Title'
import { TitleVariant } from '@components/Title/types'
import VideoPlayer from '@components/VideoPlayer'
import { SectionType } from '@utils/types'
import React from 'react'
import { ITEMS } from './constants'

const Skills = () => {
	return (
		<Section id={SectionType.Skills}>
			<div className='container'>
				<Title
					variant={TitleVariant.Vertical}
					title='Skills'
					text='A comprehensive showcase of technical expertise and interpersonal abilities, highlighting the tools, technologies, and soft skills that contribute to professional success and effective collaboration.'
				/>
				<div className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10'>
					<VideoPlayer
						className='h-full w-full scale-x-[-1] lg:order-last'
						url='/assets/videos/devices.mp4'
						playing
						loop
						muted
						controls={false}
						playsInline
					/>
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
