import { Button, Picture } from '@utils/types'

export type URLParams = {
	[key: string]: any
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export type Options = {
	method: Method
	headers: {
		'Content-Type': string
		Authorization: string
		[key: string]: string
	}
	body?: BodyInit | null | undefined
	[key: string]: any
}

export type FetchApiParams = {
	path: string
	method?: Method
	urlParamsObject?: URLParams
	options?: Options
	payload?: any
	isClient?: boolean
}

export type DynamicSection = {
	// __component: ComponentName
	id: number
	// [key: string]: any
}

export type DefaultResponseData = {
	id: number
	documentId: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	title?: string
	slug?: string
}

export type ResponseError = { status: number; name: string; message: string; details?: string }

export type Pagination = {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

export type ApiResponse<Data = unknown> =
	| {
			data: Data
			meta?: {
				pagination: Pagination
			}
			error?: never
	  }
	| {
			data: null
			meta?: never
			error: ResponseError
	  }

export type Label = {
	id: number
	label: string
	icon: Picture
}

export type FileItem = {
	id: number
	file: Picture
	button: Button
}

export type GalleryItem = {
	id: number
	image: Picture
}

export type ProductContent = {
	id: number
	title: string
	content: string
}

export type SEOResponse = {
	id: number
	metaTitle: string
	metaDescription: string
	keywords: null
	metaRobots: null
	structuredData: null
	metaViewport: null
	canonicalURL: null
	metaImage: {
		url: string
		hash: string
		ext: string
	}
	metaSocial: any[]
}
