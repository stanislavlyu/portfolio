import { BASE_URL } from '@utils/constants'

export function isInternalUrl(url: string): boolean {
	try {
		const parsedUrl = new URL(url, BASE_URL)

		if (parsedUrl.origin === BASE_URL) {
			return true
		}

		return parsedUrl.hostname === BASE_URL || parsedUrl.hostname.endsWith(`.${BASE_URL}`)
	} catch (error) {
		console.error('Invalid URL provided:', error)
		return false
	}
}
