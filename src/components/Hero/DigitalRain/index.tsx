'use client'

import useDigitalRain from './hooks/useDigitalRain'

const DigitalRain = () => {
	const canvasRef = useDigitalRain()

	return (
		<div className='absolute inset-0 -z-[1] h-full w-full bg-black/50'>
			<canvas ref={canvasRef} className='absolute h-full w-full' />
			<div className='absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/50 to-transparent' />
		</div>
	)
}

export default DigitalRain
