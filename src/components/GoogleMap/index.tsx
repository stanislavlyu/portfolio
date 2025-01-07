import Container from '@components/Container'
import Footer from '@components/Footer'
import Section from '@components/Section'
import Title from '@components/Title'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { GOOGLE_MAPS_API_KEY } from './constants'

const GoogleMap = () => {
	return (
		<Section id='location' className='!pb-0'>
			<Container className='mb-4 md:mb-16'>
				<Title
					title="I'm Located in Bali"
					text="'Resident of Great Britain and Ukraine, currently based on the vibrant and serene island of Bali. Drawing inspiration from its unique culture and environment while staying connected with the global community for remote collaborations.'"
				/>
			</Container>
			<GoogleMapsEmbed
				apiKey={GOOGLE_MAPS_API_KEY}
				width='100%'
				height={450}
				maptype='satellite'
				mode='place'
				q='Bali'
			/>
			<Footer />
		</Section>
	)
}

export default GoogleMap
