import Section from '@components/Section'
import Title from '@components/Title'
import { SectionType } from '@utils/types'
import React from 'react'
import Avatar from './Avatar'
import { ABOUT_ME_AVATARS, ABOUT_ME_HIGHLIGHT_LIST } from './constants'

const AboutMe = () => {
	return (
		<Section id={SectionType.AboutMe} className='container'>
			<Title
				title='About Me'
				text='An introduction to professional experience, technical skills, and development philosophy, showcasing a passion for building high-performance web applications, collaborating with teams, and staying ahead in the ever-evolving tech landscape.'
			/>
			<div className='flex flex-col gap-8 lg:flex-row lg:gap-16'>
				<div className='relative flex w-full gap-4 lg:order-last'>
					{ABOUT_ME_AVATARS.map(({ src, alt }) => (
						<Avatar key={alt} src={src} alt={alt} />
					))}
				</div>
				<ul className='flex flex-col space-y-2 lg:max-w-[30rem] lg:space-y-4'>
					{ABOUT_ME_HIGHLIGHT_LIST.map((text) => (
						<li key={text} className='text-md text-muted-foreground'>
							{text}
						</li>
					))}
				</ul>
			</div>
		</Section>
	)
}

export default AboutMe
