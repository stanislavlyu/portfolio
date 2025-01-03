import { Button, Picture, Title } from '@utils/types'

export type ContactInfo = {
	icon: Picture
	id: number
	info: string
	link: string
	name: string
}

export type ContactForm = {
	button: Button
	checkboxText: string
	formInputs: {
		description: string
		id: number
		name: 'message' | 'name' | 'email' | 'terms' | 'phone'
		placeholder: string
		type: 'text' | 'email' | 'phone'
		label: string
	}[]
	id: number
	privacyPolicyText: string
	privacyPolicyUrl: string
}

export type ContactProps = {
	contactInfos: ContactInfo[]
	entrySection: {
		button: Button
		description: string
		id: number
		titleBlock: Title
	}
	mapIframe: string
	form: ContactForm
	isShowTitleBlock?: boolean
}
