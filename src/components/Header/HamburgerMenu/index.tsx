import NavigationMenu from '@components/Header/NavigationMenu'
import { TABS } from '@components/Header/NavigationMenu/constants'
import { AnimatedBackground } from '@components/ui/animated-background'
import { Button } from '@components/ui/button'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@components/ui/sheet'
import { cn } from '@lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const HamburgerMenu = () => {
	return (
		<Sheet>
			<SheetTrigger className='md:hidden' asChild>
				<Button className='h-10 w-10 p-0' variant='outline'>
					<Menu className='data-[state=closed]:hidden' width={16} height={16} />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader className='sr-only'>
					<SheetTitle>Navigation menu</SheetTitle>
					<SheetDescription>Navigate between sections here.</SheetDescription>
				</SheetHeader>
				<nav className='flex flex-col'>
					<AnimatedBackground
						className={cn('rounded-lg bg-zinc-100 dark:bg-red-800')}
						transition={{
							type: 'spring',
							bounce: 0.2,
							duration: 0.3,
						}}
						enableHover
					>
						{TABS.map(({ id, title, href }) => (
							<Button
								key={id}
								variant='ghost'
								data-id={id}
								type='button'
								className='px-2 py-0.5 text-zinc-600 transition-colors duration-300 hover:text-zinc-950 dark:text-white dark:hover:text-zinc-50'
								asChild
								role='link'
							>
								<Link href={href}>
									<SheetClose>{title}</SheetClose>
								</Link>
							</Button>
						))}
					</AnimatedBackground>
				</nav>
				<SheetFooter>
					<SheetClose asChild>
						<Button className='w-full' asChild>
							<Link href='#get-in-touch'>Get in touch </Link>
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default HamburgerMenu
