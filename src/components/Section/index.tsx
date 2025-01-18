'use client'

import { InView } from '@components/ui/in-view'
import { cn } from '@lib/utils'
import { useInView } from 'motion/react'
import React, { useEffect, useRef } from 'react'
import { viewOptions } from './constants'
import useSection from './hooks/useSection'
import { SectionType } from './store/types'
import { SectionProps } from './types'

const Section = ({ id, children, className, enableAnimation = true }: SectionProps) => {
	const ref = useRef<HTMLDivElement>(null)
	const { setSectionType } = useSection()
	const inView = useInView(ref, viewOptions)

	useEffect(() => {
		if (inView) {
			setSectionType(ref.current?.id as SectionType)
		}
	}, [inView])

	return (
		<section
			ref={ref}
			id={id}
			className={cn('relative overflow-hidden py-10 md:py-20 lg:py-[7.5rem]', className)}
		>
			{enableAnimation ? (
				<InView
					variants={{
						hidden: { opacity: 0, y: -100, filter: 'blur(8px)' },
						visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
					}}
					viewOptions={{ ...viewOptions, once: true }}
					transition={{ duration: 0.75, ease: 'easeInOut' }}
				>
					{children}
				</InView>
			) : (
				children
			)}
		</section>
	)
}

export default Section
