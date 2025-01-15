import { z } from 'zod'

export const formSchema = z.object({
	name: z.string().min(2, {
		message: 'Name must be at least 2 characters.',
	}),
	email: z.string().email({
		message: 'Email is not valid.',
	}),
	message: z.string().min(5, {
		message: 'Message must be at least 5 characters.',
	}),
})

export const defaultValues = {
	name: '',
	email: '',
	message: '',
}

export const FORM_FIELDS = [
	{
		id: 'name',
		name: 'name',
		label: 'Full name',
		placeholder: 'Enter your name',
		type: 'text',
		className: 'col-span-2 md:col-span-1',
	},
	{
		id: 'email',
		name: 'email',
		label: 'Email',
		placeholder: 'Enter your email',
		type: 'email',
		className: 'col-span-2 md:col-span-1 !mt-0',
	},
	{
		id: 'message',
		name: 'message',
		label: 'Message',
		placeholder:
			'Hi, I think we need a website/web app for our products at Company X. How soon can you hop on to discuss this?',
		type: 'textarea',
		className: 'col-span-2',
	},
]
