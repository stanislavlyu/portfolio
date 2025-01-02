import { useState, useCallback } from 'react'

function useHover() {
	const [isHovered, setIsHovered] = useState(false)

	const handleMouseEnter = useCallback(() => {
		setIsHovered(true)
	}, [])

	const handleMouseLeave = useCallback(() => {
		setIsHovered(false)
	}, [])

	return {
		isHovered,
		hoverHandlers: {
			onMouseEnter: handleMouseEnter,
			onMouseLeave: handleMouseLeave,
		},
	}
}

export default useHover
