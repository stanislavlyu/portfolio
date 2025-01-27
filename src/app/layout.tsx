import Footer from '@components/Footer'
import Header from '@components/Header'
import { Spotlight } from '@components/ui/spotlight'
import { inter, firaCode } from '@fonts/fonts'
import { cn } from '@lib/utils'
import ReactQueryProvider from '@providers/react-query-provider'
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
		<html lang='en'>
			<body className={cn('min-h-screen', inter.variable, firaCode.variable)}>
				<ReactQueryProvider>
					<Header />
					<main>{children}</main>
					<Footer />
					<Toaster />
				</ReactQueryProvider>
			</body>
		</html>
	)
}
