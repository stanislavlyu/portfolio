import { AnimatedBackground } from '@components/ui/animated-background'
import { Button } from '@components/ui/button'
import { cn } from '@lib/utils'
import { NAVIGATION_LIST } from '@utils/types'
import Link from 'next/link'
import React from 'react'
import { NavigationMenuProps } from './types'

const HeaderNavigationMenu = ({ className }: NavigationMenuProps) => {
	return (
		<nav className={cn(className)}>
			<AnimatedBackground
				className={cn('rounded-lg bg-zinc-100 dark:bg-red-800')}
				transition={{
					type: 'spring',
					bounce: 0.2,
					duration: 0.3,
				}}
				enableHover
			>
				{NAVIGATION_LIST.map(({ id, title, href }) => (
					<Button
						variant='ghost'
						key={id}
						data-id={id}
						type='button'
						className='px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-white dark:hover:text-zinc-50'
						asChild
						role='link'
					>
						<Link href={href}>{title}</Link>
					</Button>
				))}
			</AnimatedBackground>
		</nav>
	)
}

export default HeaderNavigationMenu
