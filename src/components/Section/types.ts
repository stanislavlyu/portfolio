import { ReactNode } from 'react'

export type SectionProps = {
	id: string
	children: ReactNode
	className?: string
	enableAnimation?: boolean
}
