import Hero from '@components/Hero'
import dynamic from 'next/dynamic'

const CaseStudies = dynamic(() => import('@components/CaseStudies'))
const Skills = dynamic(() => import('@components/Skills'))
const Experience = dynamic(() => import('@components/Experience'))
const Testimonials = dynamic(() => import('@components/Testimonials'))
const Contact = dynamic(() => import('@components/Contact'))

export default function Home() {
	return (
		<>
			<Hero />
			<CaseStudies />
			<Skills />
			<Experience />
			<Testimonials />
			<Contact />
		</>
	)
}
