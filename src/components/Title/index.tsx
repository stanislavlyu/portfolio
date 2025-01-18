import { TextShimmer } from '@components/ui/text-shimmer'
import { cn } from '@lib/utils'
import { Code, CodeXml } from 'lucide-react'
import React from 'react'
import { TitleProps, TitleVariant } from './types'

const Title = ({ variant = TitleVariant.Horizontal, className, title, text }: TitleProps) => {
	return (
		<div
			className={cn(
				'flex flex-col items-center justify-between gap-2 md:flex-row md:items-start',
				{
					'flex-col items-center gap-2': variant === TitleVariant.Vertical,
				},
				className
			)}
		>
			<h2 className='text-center text-[2rem] font-bold capitalize leading-10 md:text-[2.5rem] md:leading-[3rem]'>
				<TextShimmer
					duration={3}
					className='[--base-color:theme(colors.red.700)] [--base-gradient-color:theme(colors.red.200)] dark:[--base-color:theme(colors.red.700)] dark:[--base-gradient-color:theme(colors.red.400)]'
				>
					{title}
				</TextShimmer>
			</h2>
			{text && (
				<div
					className={cn(
						'max-w-[30rem] text-center font-firaCode text-base text-black dark:text-gray-300 md:text-right',
						{
							'text-center': variant === TitleVariant.Vertical,
						}
					)}
				>
					<Code width={16} height={16} className='inline' />
					{text}
					<CodeXml width={16} height={16} className='inline' />
				</div>
			)}
		</div>
	)
}

export default Title
