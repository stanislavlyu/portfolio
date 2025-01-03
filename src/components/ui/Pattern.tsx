import React from 'react'

const Pattern = () => {
	return (
		<svg className='fixed -z-[5] h-full w-full'>
			<defs>
				<pattern id='grid-pattern' width='8' height='8' patternUnits='userSpaceOnUse'>
					<path
						xmlns='http://www.w3.org/2000/svg'
						d='M0 4H4M4 4V0M4 4H8M4 4V8'
						stroke='currentColor'
						strokeOpacity='0.75'
						className='stroke-gray-50 dark:stroke-black'
					/>
					<rect
						x='3'
						y='3'
						width='2'
						height='2'
						fill='currentColor'
						fillOpacity='0.25'
						className='fill-gray-50 dark:fill-black'
					/>
				</pattern>
			</defs>
			<rect width='100%' height='100%' fill='url(#grid-pattern)' />
		</svg>
	)
}

export default Pattern
