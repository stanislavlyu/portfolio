import DigitalRain from '@components/DigitalRain'
import Footer from '@components/Footer'
import Header from '@components/Header'
import { Spotlight } from '@components/ui/spotlight'
import { inter, firaCode } from '@fonts/fonts'
import { cn } from '@lib/utils'
import { ThemeProvider } from '@providers/theme-provider'
import { FALLBACK_SEO } from '@utils/constants'
import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import React from 'react'
import './globals.css'
import { RootLayoutProps } from './types'

const Toaster = dynamic(() => import('@components/ui/toaster').then((element) => element.Toaster))
export const metadata: Metadata = FALLBACK_SEO

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
