import { cn } from '@lib/utils'
import Image from 'next/image'
import { CaseStudiesVectorProps } from './types'

const Vector = ({ position, className }: CaseStudiesVectorProps) => {
	return (
		<div
			className={cn(
				'h-full w-full max-w-[19rem]',
				'absolute top-0',
				position === 'left' && 'left-0 -scale-x-[1]',
				position === 'right' && 'right-0',
				className
			)}
		>
			<div
				className={cn(
					'absolute top-0 z-10',
					'h-20 w-full bg-gradient-to-b from-black to-transparent'
				)}
			/>
			<Image
				className='object-cover'
				src='/assets/images/vector.svg'
				alt='case studies background'
				fill
				unoptimized
			/>
		</div>
	)
}

export default Vector
