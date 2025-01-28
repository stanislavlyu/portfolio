import { Input } from '@components/ui/input'
import { Textarea } from '@components/ui/textarea'
import { z } from 'zod'
import { ControllerRenderProps } from 'react-hook-form'
import { cn } from '@/lib/utils'
import { formSchema } from './constants'
import { FormFields } from './types'

export const renderInputComponent = (
	type: string,
	placeholder: string,
	field: ControllerRenderProps<FormFields>
) => {
	const sharedProps = {
		className: 'bg-black',
		placeholder,
		...field,
		value: field.value as string,
	}

	switch (type) {
		case 'textarea':
			return (
				<Textarea
					{...sharedProps}
					className={cn('min-h-40 resize-none', sharedProps.className)}
				/>
			)
		case 'email':
			return <Input {...sharedProps} type='email' />
		default:
			return <Input {...sharedProps} />
	}
}

export const sendContactMessage = async (payload: z.infer<typeof formSchema>) => {
	const response = await fetch('/api/contact', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	})
	if (!response.ok) {
		throw new Error('Failed to send message')
	}
	return response.json()
}
