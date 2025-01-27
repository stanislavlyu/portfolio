import { Button } from '@components/ui/button'
import { cn } from '@lib/utils'
import { NAVIGATION_LIST } from '@utils/types'
import Link from 'next/link'
import React from 'react'
import { NavigationMenuProps } from './types'

const HeaderNavigationMenu = ({ className }: NavigationMenuProps) => {
	return (
		<nav className={cn(className)}>
			{NAVIGATION_LIST.map(({ id, title }) => (
				<Button
					variant='ghost'
					key={id}
					data-id={id}
					type='button'
					className='h-auto px-2 py-2 text-zinc-300 transition-colors duration-300 hover:bg-zinc-800 hover:text-white'
					asChild
					role='link'
				>
					<Link href={`#${id}`}>{title}</Link>
				</Button>
			))}
		</nav>
	)
}

export default HeaderNavigationMenu
