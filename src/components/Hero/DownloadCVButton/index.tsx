'use client'

import { BorderTrail } from '@components/ui/border-trail'
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
			<BorderTrail
				className='bg-gradient-to-l from-red-200 via-red-500 to-red-200 dark:from-red-400 dark:via-red-500 dark:to-red-700'
				style={{
					boxShadow:
						'0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
				}}
				size={20}
			/>
			<Button variant='secondary' onClick={handleDownload}>
				Download CV
			</Button>
		</div>
	)
}

export default DownloadCVButton
