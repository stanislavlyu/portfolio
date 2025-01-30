import { cn } from '@lib/utils'
import Image from 'next/image'

const ContactVector = () => {
	return (
		<div className={cn('absolute inset-0 -z-10 h-full w-full -scale-x-[1]')}>
			<div
				className={cn(
					'absolute top-0 z-10',
					'h-20 w-full bg-gradient-to-b from-black to-transparent'
				)}
			/>
			<Image
				src='/assets/images/contact-vectors.svg'
				className='object-cover'
				alt='geometry lines'
				fill
				unoptimized
			/>
		</div>
	)
}

export default ContactVector
