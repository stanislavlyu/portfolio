import React from 'react'

const ExperienceGradientOverlay = () => {
	return (
		<div className='pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-neutral-900 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,white,transparent)]' />
	)
}

export default ExperienceGradientOverlay
