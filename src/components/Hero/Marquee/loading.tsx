import { Skeleton } from '@components/ui/skeleton'

const MarqueeLoading = () => {
	return (
		<div className='absolute bottom-6 z-10 w-full overflow-hidden'>
			<div className='flex animate-pulse gap-6'>
				{Array.from({ length: 10 }).map((_, index) => (
					<div
						key={index}
						className='flex h-[68px] w-[200px] items-center gap-4 rounded-lg border bg-black/50 p-5'
					>
						<Skeleton className='h-6 w-6 rounded-full' />
						<Skeleton className='h-4 w-24 rounded' />
					</div>
				))}
			</div>
		</div>
	)
}

export default MarqueeLoading
