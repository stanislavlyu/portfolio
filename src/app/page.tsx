import CaseStudies from '@components/CaseStudies'
import Contact from '@components/Contact'
import Experience from '@components/Experience'
import Hero from '@components/Hero'
import Skills from '@components/Skills'
import Testimonials from '@components/Testimonials'

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
