import { Button } from '@components/ui/button'
import { SheetClose } from '@components/ui/sheet'
import { cn } from '@lib/utils'
import { NAVIGATION_LIST } from '@utils/types'
import Link from 'next/link'
import React from 'react'
import { NavigationMenuProps } from './types'

const HeaderNavigationMenu = ({ isHamburgerMenu, className }: NavigationMenuProps) => {
	return (
		<nav className={cn(className)}>
			{NAVIGATION_LIST.map(({ id, title }) =>
				isHamburgerMenu ? (
					<SheetClose key={id} asChild>
						<Button
							variant='ghost'
							data-id={id}
							type='button'
							className='h-auto px-2 py-2 text-zinc-300 transition-colors duration-300 hover:bg-blue-800 hover:text-white'
							asChild
							role='link'
						>
							<Link href={`#${id}`}>{title}</Link>
						</Button>
					</SheetClose>
				) : (
					<Button
						key={id}
						variant='ghost'
						data-id={id}
						type='button'
						className='h-auto px-2 py-2 text-zinc-300 transition-colors duration-300 hover:bg-blue-800 hover:text-white'
						asChild
						role='link'
					>
						<Link href={`#${id}`}>{title}</Link>
					</Button>
				)
			)}
		</nav>
	)
}

export default HeaderNavigationMenu
