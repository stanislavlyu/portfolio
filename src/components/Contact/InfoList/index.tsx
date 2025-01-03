import Link from 'next/link'
import { CONTACT_ITEMS } from './constants'

const ContactInfoList = () => {
	return (
		<ul className='grid h-max flex-1 grid-cols-1 flex-col gap-5 py-6 sm:grid-cols-2 md:gap-8'>
			{CONTACT_ITEMS.map(({ id, info, link, Icon, name }) => (
				<li key={id}>
					<Link
						href={link}
						target='_blank'
						className='flex h-max items-center gap-3 text-sm text-gray-300'
					>
						<div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-red-50'>
							{Icon}
						</div>
						<div className='flex flex-col gap-1'>
							<span className='font-semibold'>{name}</span>
							{info}
						</div>
					</Link>
				</li>
			))}
		</ul>
	)
}

export default ContactInfoList
