import Container from '@components/Container'
import Logo from '@components/Logo'
import dynamic from 'next/dynamic'
import React from 'react'
import ContactButton from './ContactButton'
import NavigationMenu from './NavigationMenu'

const HamburgerMenu = dynamic(() => import('./HamburgerMenu'))

const Header = () => {
	return (
		<header className='fixed top-0 z-50 w-full border-b bg-background/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:py-4'>
			<Container className='flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<Logo />
					<NavigationMenu className='hidden flex-row md:flex' />
				</div>
				<div className='flex items-center gap-2'>
					<HamburgerMenu />
					<ContactButton />
					{/*<ModeToggle />*/}
				</div>
			</Container>
		</header>
	)
}

export default Header
