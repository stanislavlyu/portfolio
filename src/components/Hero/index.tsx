import Container from '@components/Container'
import HeroAvatar from '@components/Hero/Avatar'
import Section from '@components/Section'
import { InfiniteSlider } from '@components/ui/infinite-slider'
import { TransitionPanel } from '@components/ui/transition-panel'
import Image from 'next/image'
import React from 'react'
import Description from './Description'
import DownloadCVButton from './DownloadCVButton'
import Title from './Title'
import { TECH_ICONS } from './constants'

const Hero = () => {
	return (
		<Section id='hero' className='bg-black/25 py-0 md:min-h-[46rem] md:py-0 lg:py-0'>
			<Container className='grid h-svh grid-cols-1 flex-col items-center justify-center md:grid-cols-2'>
				<div className='order-2 flex h-full w-full flex-col items-center justify-start gap-2 text-center text-black dark:text-white md:order-1 md:items-start md:justify-center md:text-left'>
					<Title />
					<Description />
					<DownloadCVButton className='relative mt-2 flex w-max flex-col gap-4 rounded sm:flex-row lg:mt-4' />
				</div>
				<HeroAvatar />
			</Container>
			<InfiniteSlider className='absolute bottom-6 z-10' gap={24} duration={50} reverse>
				{TECH_ICONS.map(({ title, icon, alt }, index) => (
					<div
						key={index}
						className='flex items-center gap-4 rounded-lg bg-blue-900/20 p-5 font-normal'
					>
						<Image className='h-6 w-6' width={24} height={24} src={icon} alt={alt} />
						{title}
					</div>
				))}
			</InfiniteSlider>
		</Section>
	)
}

export default Hero
