'use client'

import useSection from '@components/Section/hooks/useSection'
import { SectionType } from '@components/Section/store/types'
import { Button } from '@components/ui/button'
import { cn } from '@lib/utils'
import Link from 'next/link'
import React from 'react'

const ContactButton = () => {
	const { sectionType } = useSection()

	return (
		<Button
			variant={sectionType === SectionType.Hero ? 'outline' : 'default'}
			className={cn('hidden h-9 md:flex', {
				'animate-out fade-out-50': sectionType === SectionType.Hero,
				'animate-in fade-in-50': sectionType !== SectionType.Hero,
			})}
			asChild
		>
			<Link href='#contact'>Contact Me</Link>
		</Button>
	)
}

export default ContactButton
