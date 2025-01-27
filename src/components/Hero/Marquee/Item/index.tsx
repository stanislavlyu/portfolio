import Image from 'next/image'
import React from 'react'
import { MarqueeItemProps } from './types'

const MarqueeItem = ({ icon, alt, title }: MarqueeItemProps) => {
	return (
		<div className='flex items-center gap-4 rounded-lg border bg-background/50 p-5 font-normal'>
			<Image className='h-6 w-6' width={24} height={24} src={icon} alt={alt} />
			{title}
		</div>
	)
}
export default MarqueeItem
