'use client'

import useSection from '@components/Section/hooks/useSection'
import { SectionType } from '@components/Section/store/types'
import { Button } from '@components/ui/button'
import Link from 'next/link'
import React from 'react'

const ContactButton = () => {
	const { sectionType } = useSection()

	return (
		<Button
			variant={sectionType === SectionType.Hero ? 'outline' : 'default'}
			className='hidden h-9 md:flex'
			asChild
		>
			<Link href='#contact'>Contact Me</Link>
		</Button>
	)
}

export default ContactButton
