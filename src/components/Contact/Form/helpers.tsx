import { Input } from '@components/ui/input'
import { Textarea } from '@components/ui/textarea'
import { ControllerRenderProps } from 'react-hook-form'
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
					className='min-h-40'
					placeholder={placeholder}
					{...field}
					value={field.value as string}
				/>
			)
		case 'email':
			return (
				<Input
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
					id={field.name}
					placeholder={placeholder}
					{...field}
					value={field.value as string}
				/>
			)
	}
}
