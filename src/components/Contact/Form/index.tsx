'use client'

import { Button } from '@components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@hooks/use-toast'
import { cn } from '@lib/utils'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { defaultValues, FORM_FIELDS, formSchema } from './constants'
import { renderInputComponent } from './helpers'
import { FormFields } from './types'

const ContactForm = () => {
	const { toast } = useToast()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	async function onSubmit(payload: z.infer<typeof formSchema>) {
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})
			if (response.ok) {
				form.reset()
				toast({
					variant: 'default',
					description: 'Message sent successfully!',
				})
			} else {
				toast({
					variant: 'destructive',
					title: 'Uh oh! Something went wrong.',
					description: 'Failed to send message.',
				})
			}
		} catch (error) {
			console.error('Error sending message:', error)
			toast({
				variant: 'destructive',
				title: 'Uh oh! Something went wrong.',
				description: 'There was a problem with your request.',
			})
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='grid flex-1 grid-cols-1 gap-x-3 space-y-3 md:grid-cols-2'
			>
				{FORM_FIELDS.map(({ id, name, label, placeholder, type, className }) => (
					<FormField
						key={id}
						control={form.control}
						name={name as keyof FormFields}
						render={({ field }) => (
							<FormItem className={cn(className)}>
								<FormLabel htmlFor={name}>{label}</FormLabel>
								<FormControl>
									{renderInputComponent(type, placeholder, field)}
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				))}
				<Button disabled={form.formState.isSubmitting} className='col-span-2' type='submit'>
					Submit
				</Button>
			</form>
		</Form>
	)
}

export default ContactForm
