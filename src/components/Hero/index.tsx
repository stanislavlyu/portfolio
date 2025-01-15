import Container from '@components/Container'
import HeroAvatar from '@components/Hero/Avatar'
import DigitalRain from '@components/Hero/DigitalRain'
import Section from '@components/Section'
import { InfiniteSlider } from '@components/ui/infinite-slider'
import { TransitionPanel } from '@components/ui/transition-panel'
import Image from 'next/image'
import React from 'react'
import codeImage from '../../../public/assets/images/code.png'
import Description from './Description'
import DownloadCVButton from './DownloadCVButton'
import Title from './Title'
import { TECH_ICONS } from './constants'

const Hero = () => {
	return (
		<Section id='hero' className='py-0 md:min-h-[46rem] md:py-0 lg:py-0'>
			<Container className='h-svh flex-col items-center justify-center'>
				<div className='flex h-full w-full flex-col items-center justify-center gap-2 text-center text-black dark:text-white md:order-1'>
					<Title />
					<Description />
					<DownloadCVButton className='relative mt-2 flex w-max flex-col gap-4 rounded sm:flex-row lg:mt-4' />
				</div>
				{/*<Image src={codeImage} alt='code' />*/}
				{/*<HeroAvatar />*/}
			</Container>
			<InfiniteSlider className='absolute bottom-6 z-10' gap={24} duration={50} reverse>
				{TECH_ICONS.map(({ title, icon, alt }, index) => (
					<div
						key={index}
						className='flex items-center gap-4 rounded-lg border bg-black/50 p-5 font-normal'
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
