import { ImageProps } from 'next/image'

type GetImageProps = {
	url: string
	alternativeText: string
	formats: {
		thumbnail: {
			url: string
		}
	} | null
} | null

export function getImage(
	props: GetImageProps = { url: '', alternativeText: '', formats: null },
	isHasPlaceholder = false
): ImageProps {
	const {
		url = '/assets/images/mock.png',
		alternativeText = 'placeholder',
		formats = null,
	} = props || {}

	const imageProps: ImageProps = {
		src: url ?? '/assets/images/mock.png',
		alt: alternativeText ?? 'placeholder',
		unoptimized: url.endsWith('.svg'),
	}

	if (formats?.thumbnail?.url && isHasPlaceholder) {
		imageProps.blurDataURL = formats.thumbnail.url
		imageProps.placeholder = 'blur'
	}

	return imageProps
}
