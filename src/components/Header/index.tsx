import Container from '@components/Container'
import HamburgerMenu from '@components/Header/HamburgerMenu'
import Logo from '@components/Logo'
import React from 'react'
import ContactButton from './ContactButton'
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
					<ContactButton />
					{/*<ModeToggle />*/}
				</div>
			</Container>
		</header>
	)
}

export default Header
