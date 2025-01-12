export enum SectionType {
	Hero = 'hero',
	CaseStudies = 'case-studies',
}

export type SectionStoreProps = {
	sectionType: string
	setSectionType: (sectionType: string) => void
}
