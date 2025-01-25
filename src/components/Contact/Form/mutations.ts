import { z } from 'zod'
import { UseFormReturn } from 'react-hook-form'
import { formSchema } from './constants'
import { sendContactMessage } from './helpers'

export const useContactMutation = (form: UseFormReturn<z.infer<typeof formSchema>>) => ({
	mutationFn: sendContactMessage,
	onSuccess: async () => {
		const { toast } = await import('@hooks/use-toast')
		form.reset()
		toast({
			variant: 'default',
			description: 'Message sent successfully!',
		})
	},
	onError: async (error: Error) => {
		const { toast } = await import('@hooks/use-toast')
		console.error('Error sending message:', error)
		toast({
			variant: 'destructive',
			title: 'Uh oh! Something went wrong.',
			description: 'There was a problem with your request.',
		})
	},
})
