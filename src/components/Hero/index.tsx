import Container from '@components/Container'
import DownloadCVButton from '@components/Hero/DownloadCVButton'
import { AspectRatio } from '@components/ui/aspect-ratio'
import { InfiniteSlider } from '@components/ui/infinite-slider'
import { TextLoop } from '@components/ui/text-loop'
import { TextShimmer } from '@components/ui/text-shimmer'
import { Tilt } from '@components/ui/tilt'
import { cn } from '@lib/utils'
import Image from 'next/image'
import React from 'react'
import avatar from '../../../public/assets/images/avatar.webp'
import { SKILL_LIST, TECH_ICONS } from './constants'

const Hero = () => {
	return (
		<section className='relative h-dvh snap-center overflow-x-hidden md:min-h-[46rem]'>
			<div className='absolute right-[1rem] top-0 h-[20%] w-[15%] rounded-full bg-gradient-to-r from-white to-black blur-3xl dark:from-cyan-500 dark:to-blue-500 dark:opacity-30 sm:-right-[7rem] md:-right-32' />
			<div className='absolute -left-[40%] top-0 h-full w-[50%] rounded-full bg-gradient-to-r from-white to-black opacity-50 blur-3xl dark:from-cyan-500 dark:to-blue-500 dark:opacity-10 sm:-left-[42%] md:-left-[45%]' />
			<Container className='flex h-full flex-col items-center justify-center'>
				<div className='grid h-full grid-cols-1 items-center justify-between gap-4 md:grid-cols-2 lg:gap-20'>
					<div className='order-2 flex h-full w-full flex-col justify-center gap-2 text-black dark:text-white md:order-1'>
						<h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl'>
							<span>Hi there, I am</span>
							<TextShimmer
								duration={3}
								className='[--base-color:theme(colors.red.700)] [--base-gradient-color:theme(colors.red.200)] dark:[--base-color:theme(colors.red.800)] dark:[--base-gradient-color:theme(colors.red.400)]'
							>
								Stanislav Lyu!
							</TextShimmer>
						</h1>
						<div className='my-2 text-lg sm:text-xl lg:my-6 lg:text-3xl'>
							I am Experienced front-end developer with 5+ years of expertise in{' '}
							<TextLoop className='font-semibold text-red-700'>{SKILL_LIST}</TextLoop>
						</div>
						<DownloadCVButton className='relative mt-2 flex w-max flex-col gap-4 rounded sm:flex-row lg:mt-4' />
					</div>
					<div className='order-1 md:order-2'>
						<Tilt
							rotationFactor={6}
							isRevese
							style={{
								transformOrigin: 'center center',
							}}
							springOptions={{
								stiffness: 26.7,
								damping: 4.1,
								mass: 0.2,
							}}
							className='group relative rounded-lg'
						>
							<AspectRatio ratio={1}>
								<Image
									src={avatar}
									fill
									placeholder='blur'
									priority
									alt='Avatar'
									className='rounded-lg object-cover shadow-sm shadow-red-600 duration-700 md:grayscale md:group-hover:grayscale-0'
								/>
							</AspectRatio>
						</Tilt>
					</div>
				</div>
			</Container>
			<InfiniteSlider className='absolute bottom-8' gap={24} duration={50} reverse>
				{TECH_ICONS.map(({ path, alt, className }, index) => (
					<div key={index} className={cn(className)}>
						<Image className='h-8 w-8' width={32} height={32} src={path} alt={alt} />
					</div>
				))}
			</InfiniteSlider>
		</section>
	)
}

export default Hero
