export const getGradientColor = (y: number, height: number, colors: string[]): string => {
	const progress = y / height
	const index = Math.floor(progress * (colors.length - 1))
	return colors[index]
}

export const interpolateColor = (startColor: string, endColor: string, factor: number): string => {
	const start = parseInt(startColor.slice(1), 16)
	const end = parseInt(endColor.slice(1), 16)

	const rStart = (start >> 16) & 0xff
	const gStart = (start >> 8) & 0xff
	const bStart = start & 0xff

	const rEnd = (end >> 16) & 0xff
	const gEnd = (end >> 8) & 0xff
	const bEnd = end & 0xff

	const r = Math.round(rStart + (rEnd - rStart) * factor)
	const g = Math.round(gStart + (gEnd - gStart) * factor)
	const b = Math.round(bStart + (bEnd - bStart) * factor)

	return `rgb(${r}, ${g}, ${b})`
}
