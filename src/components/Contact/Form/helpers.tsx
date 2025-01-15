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
					className='min-h-40 resize-none bg-black/50'
					placeholder={placeholder}
					{...field}
					value={field.value as string}
				/>
			)
		case 'email':
			return (
				<Input
					className='bg-black/50'
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
					className='bg-black/50'
					id={field.name}
					placeholder={placeholder}
					{...field}
					value={field.value as string}
				/>
			)
	}
}
