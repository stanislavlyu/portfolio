import Container from '@components/Container'
import Footer from '@components/Footer'
import Section from '@components/Section'
import Title from '@components/Title'

const GoogleMap = () => {
	return (
		<Section id='location' className='!pb-0'>
			<Container>
				<Title
					title="I'm Located in Bali"
					text="'Resident of Great Britain and Ukraine, currently based on the vibrant and serene island of Bali. Drawing inspiration from its unique culture and environment while staying connected with the global community for remote collaborations.'"
				/>
			</Container>
			<iframe
				suppressHydrationWarning
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591311.1232301384!2d114.74192590302222!3d-8.454654167577194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali!5e1!3m2!1sen!2sid!4v1735915662383!5m2!1sen!2sid'
				width='100%'
				height='450'
				className='mt-16 border-none'
				allowFullScreen
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
				title='Location map'
				tabIndex={0}
			/>
			<Footer />
		</Section>
	)
}

export default GoogleMap
