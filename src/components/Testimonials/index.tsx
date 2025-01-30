'use client'

import Section from '@components/Section'
import Title from '@components/Title'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNavigation,
} from '@components/ui/carousel'
import { SectionType } from '@utils/types'
import React from 'react'
import Card from './Card'
import { CAROUSEL_ITEMS } from './constants'

const Testimonials = () => {
	return (
		<Section id={SectionType.Testimonials} className='container'>
			<Title
				title='Testimonials'
				text="Discover what others are saying about my work, skills, and contributions. These testimonials highlight the impact I've made and the value I bring to every project."
			/>
			<Carousel>
				<CarouselContent className='-ml-4'>
					{CAROUSEL_ITEMS.map(({ id, ...restProps }) => (
						<CarouselItem
							key={id}
							className='basis-full pl-4 md:basis-1/2 lg:basis-1/3'
						>
							<Card {...restProps} />
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselNavigation
					className='absolute -bottom-12 left-auto top-auto w-full justify-end gap-2 md:-bottom-20'
					classNameButton='bg-zinc-800 *:stroke-zinc-50 bg-blue-900 *:stroke-white'
					alwaysShow
				/>
			</Carousel>
		</Section>
	)
}

export default Testimonials
