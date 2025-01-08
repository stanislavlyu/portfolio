'use client'

import Container from '@components/Container'
import Section from '@components/Section'
import Title from '@components/Title'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@components/ui/card'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
} from '@components/ui/carousel'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import { CAROUSEL_ITEMS } from './constants'

const Testimonials = () => {
	return (
		<Section id='testimonials' className='pb-20 md:mb-[10rem]'>
			<Container>
				<Title
					title='Testimonials'
					text="Discover what others are saying about my work, skills, and contributions. These testimonials highlight the impact I've made and the value I bring to every project."
				/>
				<Carousel className='mt-16'>
					<CarouselContent className='-ml-4'>
						{CAROUSEL_ITEMS.map(({ id, text, avatar, Logo, name, position }) => (
							<CarouselItem key={id} className='basis-full pl-4 md:basis-1/2'>
								<Card>
									<CardHeader>
										<CardTitle className='text-white'>{Logo}</CardTitle>
										<CardDescription className='!mt-8'>{text}</CardDescription>
									</CardHeader>
									<CardFooter className='mt-6 flex gap-4'>
										<Avatar className='h-16 w-16'>
											<AvatarImage
												loading='lazy'
												width={64}
												height={64}
												src={avatar}
												alt={name}
												className='h-16 w-16 rounded-full'
											/>
											<AvatarFallback className='flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 text-xl text-black'>
												{name[0]}
											</AvatarFallback>
										</Avatar>
										<div className='flex flex-col gap-1'>
											<span className='text-xl font-semibold text-gray-200'>
												{name}
											</span>
											<span className='text-gray-500'>{position}</span>
										</div>
									</CardFooter>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselNavigation
						className='absolute -bottom-20 left-auto top-auto w-full justify-end gap-2'
						classNameButton='bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800'
						alwaysShow
					/>
				</Carousel>
			</Container>
		</Section>
	)
}

export default Testimonials
