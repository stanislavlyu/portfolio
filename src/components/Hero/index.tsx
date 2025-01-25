import Container from '@components/Container'
import Marquee from '@components/Hero/Marquee'
import Section from '@components/Section'
import { SectionType } from '@utils/types'
import React from 'react'
import Description from './Description'
import DownloadCVButton from './DownloadCVButton'
import Title from './Title'

const Hero = () => {
	return (
		<Section
			id={SectionType.Hero}
			className='h-svh py-0 md:min-h-[46rem] md:py-0 lg:py-0 2xl:h-[55rem]'
			enableAnimation={false}
		>
			<Container className='h-full flex-col items-center justify-center'>
				<div className='flex h-full w-full flex-col items-center justify-center gap-2 text-center text-black dark:text-white md:order-1'>
					<Title />
					<Description />
					<DownloadCVButton className='relative mt-2 flex w-max flex-col gap-4 rounded sm:flex-row lg:mt-4' />
				</div>
			</Container>
			<Marquee />
		</Section>
	)
}

export default Hero
