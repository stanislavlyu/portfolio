import Section from '@components/Section'
import Title from '@components/Title'
import { Button } from '@components/ui/button'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
} from '@components/ui/carousel'
import { cn } from '@lib/utils'
import { SectionType } from '@utils/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Vector from './Vector'
import { SLIDES, SlideVariant } from './constants'

const CaseStudies = () => {
	return (
		<Section id={SectionType.CaseStudies}>
			<Vector position='left' />
			<Vector position='right' className='hidden md:block' />
			<div className='container relative z-20'>
				<Title
					title='Case Studies'
					text='An in-depth exploration of projects and challenges, showcasing innovative solutions, strategic thinking, and measurable outcomes that demonstrate expertise and impact.'
				/>
				<div className='relative w-full'>
					<Carousel>
						<CarouselContent className='-ml-4'>
							{SLIDES.map(
								({
									variant,
									title,
									description,
									backgroundImage,
									Logo,
									button,
								}) => (
									<CarouselItem
										key={title}
										className='basis-full pl-4 md:basis-1/2'
									>
										<div className='relative basis-full overflow-hidden rounded-2xl'>
											<Image
												className='absolute left-0 right-0 h-full w-full object-cover'
												fill
												sizes='(max-width: 640px) 100vw, 50vw'
												placeholder='blur'
												{...backgroundImage}
											/>
											<div className='justify-between px-6 py-6 lg:px-16 lg:py-10'>
												<div
													className={cn(
														'relative z-10 flex h-full flex-grow flex-col items-start justify-between gap-6 md:gap-8',
														{
															'text-white':
																variant === SlideVariant.White,
															'text-black':
																variant === SlideVariant.Black,
														}
													)}
												>
													<div>
														{Logo}
														<h3 className='mt-6 text-[1.5625rem] font-semibold leading-[2.1875rem] lg:mt-8 lg:text-[2.375rem] lg:leading-[3rem]'>
															{title}
														</h3>
														<p
															className={cn(
																'mt-6 text-[0.875rem] leading-6 md:min-h-[4.5rem] lg:mt-4',
																{
																	'text-gray-300':
																		variant ===
																		SlideVariant.White,
																	'text-black':
																		variant ===
																		SlideVariant.Black,
																}
															)}
														>
															{description}
														</p>
													</div>
													<Button
														variant={
															variant === SlideVariant.Black
																? 'secondary'
																: 'white'
														}
														asChild
													>
														<Link
															href={button.href}
															rel='noopener noreferrer'
															target='_blank'
															prefetch={false}
														>
															{button.title}
														</Link>
													</Button>
												</div>
											</div>
										</div>
									</CarouselItem>
								)
							)}
						</CarouselContent>
						<CarouselNavigation
							className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2'
							classNameButton='bg-blue-800 *:stroke-blue-50'
							alwaysShow
						/>
					</Carousel>
				</div>
			</div>
		</Section>
	)
}

export default CaseStudies
