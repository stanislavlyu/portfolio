import { cn } from '@lib/utils'
import { ContainerProps } from './types'

export default function Container({ children, className }: ContainerProps) {
	return (
		<div className={cn('mx-auto max-w-[90rem] px-4 md:px-14 xl:px-28', className)}>
			{children}
		</div>
	)
}
