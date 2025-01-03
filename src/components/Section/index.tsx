import { InView } from '@components/ui/in-view'
import { cn } from '@lib/utils'
import React from 'react'
import { SectionProps } from './types'

const Section = ({ id, children, className }: SectionProps) => {
	return (
		<section
			id={id}
			className={cn(
				'relative snap-center snap-always overflow-hidden py-10 md:py-[10rem]',
				className
			)}
		>
			<div className='absolute right-[1rem] top-[70%] h-[20%] w-[15%] rounded-full bg-gradient-to-r from-white to-black blur-3xl dark:from-cyan-500 dark:to-blue-500 dark:opacity-30 sm:-right-[7rem] md:-right-32' />
			<div className='absolute -left-[40%] top-0 h-full w-[50%] rounded-full bg-gradient-to-r from-white to-black opacity-50 blur-3xl dark:from-cyan-500 dark:to-blue-500 dark:opacity-10 sm:-left-[42%] md:-left-[45%]' />
			<InView
				variants={{
					hidden: { opacity: 0, y: -100, filter: 'blur(8px)' },
					visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
				}}
				viewOptions={{ margin: '0px 0px -200px 0px' }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}
			>
				{children}
			</InView>
		</section>
	)
}

export default Section
