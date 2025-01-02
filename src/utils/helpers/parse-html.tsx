import parse from 'html-react-parser'
import Image from 'next/image'
import React from 'react'

export const parseHtml = (htmlString: string = ''): React.ReactNode => {
	const options = {
		replace: (domNode: any) => {
			if (domNode.type === 'tag' && domNode.name === 'img') {
				const { src, alt } = domNode.attribs
				if (src && alt) {
					return (
						<span className='relative' key={domNode.attribs['data-reactroot']}>
							<Image
								src={src}
								alt={alt || ''}
								fill
								sizes='(min-width: 1440px) calc(59.04vw - 51px), (min-width: 780px) calc(100vw - 60px), calc(100vw - 16px)'
							/>
						</span>
					)
				}
			}
		},
	}

	return parse(htmlString, options)
}
