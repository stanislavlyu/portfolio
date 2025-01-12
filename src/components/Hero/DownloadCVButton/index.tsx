'use client'

import { Button } from '@components/ui/button'
import { cn } from '@lib/utils'
import React from 'react'
import { CV_URL } from './constants'
import { DownloadCVButtonProps } from './types'

const DownloadCVButton = ({ className }: DownloadCVButtonProps) => {
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = CV_URL
		link.download = 'CV_Stanislav_Lyu.pdf'
		link.click()
	}
	return (
		<div className={cn(className)}>
			<Button className='font-semibold' variant='default' onClick={handleDownload}>
				Download CV
			</Button>
		</div>
	)
}

export default DownloadCVButton
