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
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import NavigationMenu from '../NavigationMenu'

const HamburgerMenu = () => {
	return (
		<Sheet>
			<SheetTrigger className='md:hidden' asChild>
				<Button className='h-10 w-10 p-0' variant='outline'>
					<span className='sr-only'>Open navigation menu</span>
					<Menu className='data-[state=closed]:hidden' width={16} height={16} />
				</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader className='sr-only'>
					<SheetTitle>Navigation menu</SheetTitle>
					<SheetDescription>Navigate between sections here.</SheetDescription>
				</SheetHeader>
				<NavigationMenu className='flex flex-col' />
				<SheetFooter>
					<SheetClose asChild>
						<Button className='w-full' asChild>
							<Link href='#contact'>Contact Me</Link>
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default HamburgerMenu
