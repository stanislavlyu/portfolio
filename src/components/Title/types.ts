export enum TitleVariant {
	Horizontal = 'horizontal',
	Vertical = 'vertical',
}

export type TitleProps = {
	title: string
	variant?: TitleVariant
	className?: string
	text?: string
}
