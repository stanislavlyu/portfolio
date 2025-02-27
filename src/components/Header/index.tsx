import Logo from '@components/Logo'
import dynamic from 'next/dynamic'
import React from 'react'
import ContactButton from './ContactButton'
import NavigationMenu from './NavigationMenu'

const HamburgerMenu = dynamic(() => import('./HamburgerMenu'))

const Header = () => {
	return (
		<header className='fixed top-0 z-50 w-full border-b border-zinc-800 bg-zinc-900/95 py-2 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60 md:py-4'>
			<div className='container flex items-center justify-between'>
				<div className='flex items-center gap-4'>
					<Logo />
					<NavigationMenu className='hidden flex-row md:flex' />
				</div>
				<div className='flex items-center gap-2'>
					<HamburgerMenu />
					<ContactButton />
				</div>
			</div>
		</header>
	)
}

export default Header
