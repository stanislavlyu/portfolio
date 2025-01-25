'use client'

import { Button } from '@components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@lib/utils'
import { useMutation } from '@tanstack/react-query'
import { LoaderCircle, Send } from 'lucide-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { defaultValues, FORM_FIELDS, formSchema } from './constants'
import { renderInputComponent } from './helpers'
import { useContactMutation } from './mutations'
import { FormFields } from './types'

const ContactForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const { mutate, isPending } = useMutation(useContactMutation(form))

	const onSubmit = (payload: z.infer<typeof formSchema>) => {
		mutate(payload)
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
				<Button
					disabled={isPending}
					className='col-span-2 disabled:opacity-100'
					type='submit'
				>
					{isPending ? <LoaderCircle className='animate-spin' /> : <Send />}{' '}
					<span>{isPending ? 'Sending...' : 'Send message'}</span>
				</Button>
			</form>
		</Form>
	)
}

export default ContactForm
