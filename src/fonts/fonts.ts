import { Inter, Fira_Code } from 'next/font/google'

export const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
	preload: true,
	fallback: ['system-ui', 'arial'],
})

export const firaCode = Fira_Code({
	subsets: ['latin'],
	variable: '--font-fira-code',
	display: 'swap',
	preload: true,
	fallback: ['monospace'],
})
