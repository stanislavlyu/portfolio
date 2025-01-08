import Container from '@components/Container'
import HamburgerMenu from '@components/Header/HamburgerMenu'
import Logo from '@components/Logo'
import { Button } from '@components/ui/button'
import Link from 'next/link'
import React from 'react'
import HeaderNavigationMenu from './NavigationMenu'

const Header = () => {
	return (
		<header className='fixed top-0 z-50 w-full border-b bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:py-4'>
			<Container className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<Logo />
					<HeaderNavigationMenu className='hidden flex-row md:flex' />
				</div>
				<div className='flex items-center gap-2'>
					<HamburgerMenu />
					<Button className='hidden md:flex' asChild>
						<Link href='#contact'>Contact Me</Link>
					</Button>
					{/*<ModeToggle />*/}
				</div>
			</Container>
		</header>
	)
}

export default Header
