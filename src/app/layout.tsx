import Footer from '@components/Footer'
import Header from '@components/Header'
import DigitalRain from '@components/Hero/DigitalRain'
import { Spotlight } from '@components/ui/spotlight'
import { Toaster } from '@components/ui/toaster'
import { inter, firaCode } from '@fonts/fonts'
import { cn } from '@lib/utils'
import { ThemeProvider } from '@providers/theme-provider'
import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { RootLayoutProps } from './types'

export const metadata: Metadata = {
	title: 'Stanislav Lyu',
	description:
		"I'm a software engineer who builds accessible, inclusive products and digital experiences for the web.",
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={cn('min-h-screen', inter.variable, firaCode.variable)}>
				<DigitalRain />
				<Spotlight
					className='z-0 from-white via-gray-600 to-black blur-xl dark:from-blue-900 dark:via-blue-700 dark:to-blue-900'
					size={64}
				/>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
					<Header />
					<main>{children}</main>
					<Footer />
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
