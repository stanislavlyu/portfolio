import { LogoIcon } from '@lib/svgr'
import { cn } from '@lib/utils'
import Link from 'next/link'
import React from 'react'
import { LogoProps } from './types'

const Logo = ({ className }: LogoProps) => {
	return (
		<Link className={cn('h-8 w-max', className)} href='#'>
			<span className='sr-only'>Stanislav Lyu logo</span>
			<LogoIcon className='h-full w-full' width={66} height={32} />
		</Link>
	)
}

export default Logo
