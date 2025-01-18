import { SectionType } from '@utils/types'
import { ReactNode } from 'react'

export type SectionProps = {
	id: SectionType
	children: ReactNode
	className?: string
	enableAnimation?: boolean
}
