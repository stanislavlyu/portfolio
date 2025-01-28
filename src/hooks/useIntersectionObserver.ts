import { useEffect, useState, RefObject } from 'react'

type UseIntersectionObserverProps = {
	ref: RefObject<HTMLElement | null>
	threshold?: number
	rootMargin?: string
}

export const useIntersectionObserver = ({
	ref,
	threshold = 0.1,
	rootMargin = '0px',
}: UseIntersectionObserverProps) => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{ threshold, rootMargin }
		)

		if (ref.current) {
			observer.observe(ref.current)
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current)
			}
		}
	}, [ref, threshold, rootMargin])

	return isVisible
}
