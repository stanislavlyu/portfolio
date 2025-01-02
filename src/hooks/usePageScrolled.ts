import { useState, useEffect } from 'react'

function usePageScrolled(): boolean {
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0)
		}

		window.addEventListener('scroll', handleScroll)

		handleScroll()

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return isScrolled
}

export default usePageScrolled
