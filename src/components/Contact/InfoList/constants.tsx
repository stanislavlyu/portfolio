import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export const CONTACT_ITEMS = [
	{
		id: 'phone',
		name: 'Phone',
		info: '+380977726951',
		link: 'tel:+380977726951',
		Icon: <Phone className='text-blue-500' width={32} height={32} />,
	},
	{
		id: 'email',
		name: 'Email',
		info: 'stas-lyu@outlook.com',
		link: 'mailto:stas-lyu@outlook.com',
		Icon: <Mail className='text-blue-500' width={32} height={32} />,
	},
	{
		id: 'linkedin',
		name: 'LinkedIn',
		info: 'Stanislav Lyu',
		link: 'https://www.linkedin.com/in/stanislav-lyu',
		Icon: <Linkedin className='text-blue-600' width={32} height={32} />,
	},
	{
		id: 'github',
		name: 'Github',
		info: 'stanislavlyu',
		link: 'https://github.com/stanislavlyu',
		Icon: <Github className='text-blue-600' width={32} height={32} />,
	},
	{
		id: 'instagram',
		name: 'Instagram',
		info: '@stas_owl',
		link: 'https://www.instagram.com/stas_owl?igsh=NWw0Y2tpN2Q0dXBm&utm_source=qr',
		Icon: <Instagram className='text-blue-600' width={32} height={32} />,
	},
]
