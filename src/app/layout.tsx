import Header from '@components/Header'
import { Spotlight } from '@components/ui/spotlight'
import { Toaster } from '@components/ui/toaster'
import { inter, firaCode } from '@fonts/fonts'
import { cn } from '@lib/utils'
import { ThemeProvider } from '@providers/theme-provider'
import type { Metadata } from 'next'
import React, { Suspense } from 'react'
import ThreeBackground from '../components/ThreeBackgroud'
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
				<Suspense fallback={null}>
					<ThreeBackground />
				</Suspense>
				<Spotlight
					className='z-0 from-white via-gray-600 to-black blur-xl dark:from-blue-900 dark:via-blue-700 dark:to-blue-900'
					size={64}
				/>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
					<Header />
					<main className='xl:h-screen xl:snap-y xl:snap-mandatory xl:overflow-y-auto'>
						{children}
					</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	)
}
