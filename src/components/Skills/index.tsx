import Container from '@components/Container'
import Section from '@components/Section'
import SkillsList from '@components/Skills/List'
import Title from '@components/Title'
import { TitleVariant } from '@components/Title/types'
import Video from '@components/Video'
import { SectionType } from '@utils/types'
import React from 'react'
import { ITEMS } from './constants'

const Skills = () => {
	return (
		<Section id={SectionType.Skills}>
			<Container>
				<Title
					variant={TitleVariant.Vertical}
					title='Skills'
					text='A comprehensive showcase of technical expertise and interpersonal abilities, highlighting the tools, technologies, and soft skills that contribute to professional success and effective collaboration.'
				/>
				<div className='mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10'>
					<Video
						id='skills-video'
						className='h-full w-full scale-x-[-1] lg:order-last'
						src='portfolio/devices_background'
						autoplay={true}
						muted
						loop
						controls={false}
						height={424}
						width={588}
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
			</Container>
		</Section>
	)
}

export default Skills
