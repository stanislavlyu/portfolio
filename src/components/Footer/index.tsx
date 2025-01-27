import Logo from '@components/Logo'
import { NAVIGATION_LIST } from '@utils/types'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
	return (
		<footer className='relative z-20 border-t bg-background/95 py-10 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
			<div className='container flex flex-col items-center justify-between gap-8 md:flex-row'>
				<Logo className='h-14 !text-white md:h-8' />
				<nav>
					<ul className='flex flex-col items-center gap-6 text-sm font-medium md:flex-row md:gap-10'>
						{NAVIGATION_LIST.map(({ id, title }) => (
							<li key={id}>
								<Link href={`#${id}`}>{title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</footer>
	)
}

export default Footer
