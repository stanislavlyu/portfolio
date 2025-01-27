import { ImageResponse } from 'next/og'

export const size = {
	width: 32,
	height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
	return new ImageResponse(
		(
			<div
				style={{
					fontWeight: 'bold',
					fontSize: 24,
					background: '#1d4ed8',
					borderRadius: '4px',
					width: '100%',
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					color: 'white',
				}}
			>
				SL
			</div>
		),
		{
			...size,
		}
	)
}
