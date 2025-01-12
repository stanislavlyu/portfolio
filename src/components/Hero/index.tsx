import Container from '@components/Container'
import DownloadCVButton from '@components/Hero/DownloadCVButton'
import Section from '@components/Section'
import { InfiniteSlider } from '@components/ui/infinite-slider'
import { TextLoop } from '@components/ui/text-loop'
import { TextShimmer } from '@components/ui/text-shimmer'
import Image from 'next/image'
import React from 'react'
import { SKILL_LIST, TECH_ICONS } from './constants'

const Hero = () => {
	return (
		<Section id='hero' className='bg-dark-overlay py-0 md:min-h-[46rem] md:py-0 lg:py-0'>
			<Container className='flex h-svh flex-col items-center justify-center'>
				<div className='flex h-full w-full flex-col items-center justify-center gap-2 text-center text-black dark:text-white md:order-1'>
					<h1 className='text-[2rem] font-semibold leading-[2.5rem] md:text-[4rem] md:leading-[4.5rem]'>
						<span>
							Hi there,
							<br />I am
						</span>{' '}
						<TextShimmer
							duration={3}
							className='[--base-color:theme(colors.red.700)] [--base-gradient-color:theme(colors.red.200)] dark:[--base-color:theme(colors.red.700)] dark:[--base-gradient-color:theme(colors.red.400)]'
						>
							Stanislav Lyu!
						</TextShimmer>
					</h1>
					<div className='my-2 text-lg sm:text-xl lg:my-6 lg:text-3xl'>
						Experienced front-end developer
						<br />
						with 5+ years of expertise in{' '}
						<TextLoop className='font-semibold text-red-700'>{SKILL_LIST}</TextLoop>
					</div>
					<DownloadCVButton className='relative mt-2 flex w-max flex-col gap-4 rounded sm:flex-row lg:mt-4' />
				</div>
			</Container>
			<InfiniteSlider className='absolute bottom-6 z-10' gap={24} duration={50} reverse>
				{TECH_ICONS.map(({ title, path, alt }, index) => (
					<div
						key={index}
						className='flex items-center gap-4 rounded-lg bg-blue-900/20 p-5 font-normal'
					>
						<Image className='h-6 w-6' width={24} height={24} src={path} alt={alt} />
						{title}
					</div>
				))}
			</InfiniteSlider>
		</Section>
	)
}

export default Hero
