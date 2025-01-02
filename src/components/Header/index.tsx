import Container from '@components/Container'
import { ModeToggle } from '@components/ModeToggle'
import { Button } from '@components/ui/button'
import React from 'react'
import HeaderNavigationMenu from './NavigationMenu'

const Header = () => {
	return (
		<header className='fixed top-0 z-50 w-full border-b bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<Container className='flex items-center justify-between'>
				<HeaderNavigationMenu />
				<div className='flex items-center gap-2'>
					<Button>Get in Touch</Button>
					<ModeToggle />
				</div>
			</Container>
		</header>
	)
}

export default Header
