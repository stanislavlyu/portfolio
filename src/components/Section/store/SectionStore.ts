import { SectionType } from '@utils/types'
import { create } from 'zustand'
import { SectionStoreProps } from './types'

const DEFAULT_VALUES = {
	sectionType: SectionType.Hero,
}

export const SectionStore = create<SectionStoreProps>((set) => ({
	...DEFAULT_VALUES,
	setSectionType: (sectionType) => set({ sectionType }),
}))
