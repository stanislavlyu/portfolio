import { Input } from '@components/ui/input'
import { Textarea } from '@components/ui/textarea'
import { z } from 'zod'
import { ControllerRenderProps } from 'react-hook-form'
import { formSchema } from './constants'
import { FormFields } from './types'

export const renderInputComponent = (
	type: string,
	placeholder: string,
	field: ControllerRenderProps<FormFields>
) => {
	switch (type) {
		case 'textarea':
			return (
				<Textarea
					className='min-h-40 resize-none bg-black'
					placeholder={placeholder}
					{...field}
					value={field.value as string}
				/>
			)
		case 'email':
			return (
				<Input
					className='bg-black'
					id={field.name}
					type='email'
					placeholder={placeholder}
					{...field}
					value={field.value as string}
				/>
			)
		default:
			return (
				<Input
					className='bg-black'
					id={field.name}
					placeholder={placeholder}
					{...field}
					value={field.value as string}
				/>
			)
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
