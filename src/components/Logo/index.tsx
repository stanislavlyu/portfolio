'use client'

import useSection from '@components/Section/hooks/useSection'
import { cn } from '@lib/utils'
import { SectionType } from '@utils/types'
import Link from 'next/link'
import React from 'react'
import { LogoProps } from './types'

const Logo = ({ className }: LogoProps) => {
	const { sectionType } = useSection()
	return (
		<Link
			className={cn(
				'animate-fade w-max',
				className,
				sectionType === SectionType.Hero
					? 'text-white animate-in fade-in-50 hover:text-blue-600'
					: 'text-blue-600 animate-out fade-out-50'
			)}
			href='/'
		>
			<span className='font-firaCode font-bold uppercase'>SL</span>
		</Link>
	)
}

export default Logo
