import { Github, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export const CONTACT_ITEMS = [
	{
		id: 'phone',
		name: 'Phone',
		info: '+380977726951',
		link: 'tel:+380977726951',
		Icon: <Phone className='text-red-500' width={32} height={32} />,
	},
	{
		id: 'email',
		name: 'Email',
		info: 'stas-lyu@outlook.com',
		link: 'mailto:stas-lyu@outlook.com',
		Icon: <Mail className='text-red-500' width={32} height={32} />,
	},
	{
		id: 'linkedin',
		name: 'LinkedIn',
		info: 'Stanislav Lyu',
		link: 'https://www.linkedin.com/in/stanislav-lyu-b92ab61a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
		Icon: <Linkedin className='text-red-600' width={32} height={32} />,
	},
	{
		id: 'github',
		name: 'Github',
		info: 'stanislavlyu',
		link: 'https://github.com/stanislavlyu',
		Icon: <Github className='text-red-600' width={32} height={32} />,
	},
	{
		id: 'instagram',
		name: 'Instagram',
		info: '@stas_owl',
		link: 'https://www.instagram.com/stas_owl?igsh=NWw0Y2tpN2Q0dXBm&utm_source=qr',
		Icon: <Instagram className='text-red-600' width={32} height={32} />,
	},
]
