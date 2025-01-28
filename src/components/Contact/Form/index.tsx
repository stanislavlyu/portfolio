'use client'

import { Button } from '@components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@lib/utils'
import { useMutation } from '@tanstack/react-query'
import { LoaderCircle, Send } from 'lucide-react'
import { z } from 'zod'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { defaultValues, FORM_FIELDS, formSchema } from './constants'
import { renderInputComponent } from './helpers'
import { useContactMutation } from './mutations'
import { FormFields } from './types'

const ThankYouDialog = dynamic(() => import('@components/ThankYouDialog'), { ssr: false })

const ContactForm = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues,
	})

	const { mutate, isPending } = useMutation(useContactMutation(form, setIsDialogOpen))

	const onSubmit = (payload: z.infer<typeof formSchema>) => {
		mutate(payload)
	}

	return (
		<>
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
							render={({ field, fieldState }) => (
								<FormItem className={cn(className)}>
									<FormLabel htmlFor={name}>{label}</FormLabel>
									<FormControl>
										{renderInputComponent(type, placeholder, field)}
									</FormControl>
									<FormMessage>{fieldState.error?.message}</FormMessage>
								</FormItem>
							)}
						/>
					))}
					<Button
						disabled={isPending}
						className='col-span-2 disabled:opacity-100'
						type='submit'
					>
						{isPending ? <LoaderCircle className='animate-spin' /> : <Send />}
						<span>{isPending ? 'Sending...' : 'Send Message'}</span>
					</Button>
				</form>
			</Form>
			{isDialogOpen && (
				<ThankYouDialog
					title='Thank You!'
					description='Your request has been successfully submitted.'
					isOpen={isDialogOpen}
					onClose={() => setIsDialogOpen(false)}
				/>
			)}
		</>
	)
}

export default ContactForm
