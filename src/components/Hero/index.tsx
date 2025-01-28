'use client'

import Section from '@components/Section'
import VideoPlayer from '@components/VideoPlayer'
import { SectionType } from '@utils/types'
import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'
import Description from './Description'
import DownloadCVButton from './DownloadCVButton'
import { TECH_ICONS } from './Marquee/constants'
import Title from './Title'

const Hero = () => {
	return (
		<Section
			id={SectionType.Hero}
			className='h-svh overflow-hidden py-0 md:min-h-[46rem] md:py-0 lg:py-0 2xl:h-[55rem]'
			enableAnimation={false}
		>
			<div className='absolute inset-0'>
				<VideoPlayer
					url='https://res.cloudinary.com/dxolewbzx/video/upload/v1738028417/hero_ybhlds.mp4'
					playing
					loop
					muted
					width='100%'
					height='100%'
					className='object-cover'
					playsinline
				/>
			</div>
			<div className='container h-full flex-col items-center justify-center'>
				<div className='relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 text-center text-white md:order-1'>
					<Title text='Stanislav Lyu' intro='Hi there, I am' />
					<Description
						title='Experienced front-end developer'
						subtitle='with 5+ years of expertise in'
					/>
					<DownloadCVButton className='relative mt-2 flex w-max flex-col gap-4 rounded sm:flex-row lg:mt-4' />
				</div>
			</div>
			<div className='absolute bottom-6 z-10 w-full'>
				<Marquee speed={50} direction='right' pauseOnHover>
					{TECH_ICONS.map(({ title, icon, alt }, index) => (
						<div
							key={index}
							className='mx-3 flex items-center gap-4 rounded-lg border bg-background/50 p-5 font-normal'
						>
							<Image
								className='h-6 w-6'
								width={24}
								height={24}
								src={icon}
								alt={alt}
							/>
							{title}
						</div>
					))}
				</Marquee>
			</div>
		</Section>
	)
}

export default Hero
