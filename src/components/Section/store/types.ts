import { SectionType } from '@utils/types'

export type SectionStoreProps = {
	sectionType: SectionType
	setSectionType: (sectionType: SectionType) => void
}
