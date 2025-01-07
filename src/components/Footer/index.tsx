import Container from '@components/Container'
import Logo from '@components/Logo'
import { NAVIGATION_LIST } from '@utils/types'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className='relative z-20 bg-[#080E18] py-10'>
			<Container className='flex flex-col items-center justify-between gap-8 md:flex-row'>
				<Logo className='h-14 md:h-8' />
				<nav>
					<ul className='flex flex-col items-center gap-6 font-medium md:flex-row md:gap-10'>
						{NAVIGATION_LIST.map(({ id, title, href }) => (
							<li key={id}>
								<Link href={href}>{title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</footer>
	)
}

export default Footer
