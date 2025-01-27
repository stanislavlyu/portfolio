import Section from '@components/Section'
import Title from '@components/Title'
import { TitleVariant } from '@components/Title/types'
import { SectionType } from '@utils/types'
import ContactForm from './Form'
import ContactInfoList from './InfoList'
import ContactVector from './Vector'

const Contact = () => {
	return (
		<>
			<Section id={SectionType.Contact} enableAnimation={false}>
				<ContactVector />
				<div className='container'>
					<Title
						variant={TitleVariant.Vertical}
						title='Get in touch'
						text="Let's connect! Whether you have questions, collaboration ideas, or just want to say hello, feel free to reach out and start a conversation."
					/>
					<div className='mt-20 lg:flex lg:justify-between lg:gap-8'>
						<ContactInfoList />
						<ContactForm />
					</div>
				</div>
			</Section>
		</>
	)
}

export default Contact
