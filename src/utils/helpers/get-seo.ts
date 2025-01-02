import { SEOResponse } from '@api/types'
import { DEFAULT_META_IMAGE_URL, FALLBACK_SEO } from '@utils/constants'
import { SeoData } from '../types'

export const getSeo = (metaData: SEOResponse): SeoData => {
	const SEO = {
		title: metaData?.metaTitle || FALLBACK_SEO.title,
		description: metaData?.metaDescription || FALLBACK_SEO.description,
		images: [
			metaData?.metaImage?.hash
				? `/${metaData?.metaImage?.hash}${metaData?.metaImage?.ext}`
				: `/${DEFAULT_META_IMAGE_URL}`,
		],
	}

	return {
		title: SEO.title,
		description: SEO.description,
		twitter: {
			...SEO,
		},
		openGraph: {
			...SEO,
		},
	}
}
