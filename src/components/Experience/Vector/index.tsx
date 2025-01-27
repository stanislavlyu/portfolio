import { cn } from '@lib/utils'
import Image from 'next/image'

const ExperienceVector = () => {
	return (
		<div className={cn('absolute right-0 top-0 h-[40rem] w-[40rem]')}>
			<div
				className={cn(
					'absolute top-0 z-10',
					'h-20 w-full bg-gradient-to-b from-black to-transparent'
				)}
			/>
			<Image src='/assets/images/vortex.svg' alt='case studies background' fill unoptimized />
			<div
				className={cn(
					'absolute bottom-0 z-10',
					'h-20 w-full bg-gradient-to-t from-black to-transparent'
				)}
			/>
		</div>
	)
}

export default ExperienceVector
