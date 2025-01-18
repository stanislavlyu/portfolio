'use client'

import { InView } from '@components/ui/in-view'
import { cn } from '@lib/utils'
import { SectionType } from '@utils/types'
import { useInView } from 'motion/react'
import React, { useEffect, useRef } from 'react'
import useSection from './hooks/useSection'
import { SectionProps } from './types'

const Section = ({ id, children, className, enableAnimation = true }: SectionProps) => {
	const ref = useRef<HTMLDivElement>(null)
	const { setSectionType } = useSection()
	const inView = useInView(ref, { once: false })

	useEffect(() => {
		if (inView) {
			setSectionType(scrollY === 0 ? SectionType.Hero : id)
		}
	}, [inView])
	return (
		<section
			ref={ref}
			id={id}
			className={cn('relative py-10 md:py-20 lg:py-[7.5rem]', className)}
		>
			{enableAnimation ? (
				<InView
					variants={{
						hidden: { opacity: 0, y: -100, filter: 'blur(8px)' },
						visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
					}}
					viewOptions={{ once: false, margin: '0px 0px -200px 0px' }}
					transition={{ duration: 0.5, ease: 'easeInOut' }}
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
