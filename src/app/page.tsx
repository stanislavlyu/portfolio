import CaseStudies from '@components/CaseStudies'
import Contact from '@components/Contact'
import Experience from '@components/Experience'
import GoogleMap from '@components/GoogleMap'
import Hero from '@components/Hero'
import Skills from '@components/Skills'
import Testimonials from '@components/Testimonials'
import { GOOGLE_MAPS_API_KEY } from '@utils/constants'

export default function Home() {
	return (
		<>
			<Hero />
			<CaseStudies />
			<Skills />
			<Experience />
			<Testimonials />
			<Contact />
			{/*<GoogleMap apiKey={GOOGLE_MAPS_API_KEY} />*/}
		</>
	)
}
