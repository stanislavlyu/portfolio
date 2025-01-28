import { z } from 'zod'
import { Dispatch, SetStateAction } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { formSchema } from './constants'
import { sendContactMessage } from './helpers'

export const useContactMutation = (
	form: UseFormReturn<z.infer<typeof formSchema>>,
	setDialogOpen: Dispatch<SetStateAction<boolean>>
) => ({
	mutationFn: sendContactMessage,
	onSuccess: async () => {
		form.reset()
		setDialogOpen(true)
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
