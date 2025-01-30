import Hero from '@components/Hero'
import dynamic from 'next/dynamic'

const CaseStudies = dynamic(() => import('@components/CaseStudies'))
const Skills = dynamic(() => import('@components/Skills'))
const Experience = dynamic(() => import('@components/Experience'))
const Testimonials = dynamic(() => import('@components/Testimonials'))
const Contact = dynamic(() => import('@components/Contact'))
const AboutMe = dynamic(() => import('@components/AboutMe'))
export default async function Home() {
	return (
		<>
			<Hero />
			<AboutMe />
			<CaseStudies />
			<Skills />
			<Experience />
			<Testimonials />
			<Contact />
		</>
	)
}
