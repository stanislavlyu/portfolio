'use client'

import { SectionStore } from '../store/SectionStore'

const useSection = () => {
	const sectionType = SectionStore((state) => state.sectionType)
	const setSectionType = SectionStore((state) => state.setSectionType)

	return { sectionType, setSectionType }
}

export default useSection
